import http from "node:http";
import crypto from "node:crypto";
import { exec } from "node:child_process";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const port = 8888;
const redirectUri = `http://127.0.0.1:${port}/callback`;
const scope = "user-top-read";

if (!clientId || !clientSecret) {
  console.error("Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in your terminal first.");
  process.exit(1);
}

const state = crypto.randomBytes(16).toString("hex");
const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.search = new URLSearchParams({
  response_type: "code",
  client_id: clientId,
  scope,
  redirect_uri: redirectUri,
  state,
  show_dialog: "true",
}).toString();

function openBrowser(url) {
  const quoted = JSON.stringify(url);
  if (process.platform === "win32") exec(`cmd /c start "" ${quoted}`);
  else if (process.platform === "darwin") exec(`open ${quoted}`);
  else exec(`xdg-open ${quoted}`);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", redirectUri);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end("Not found");
    return;
  }

  if (url.searchParams.get("state") !== state) {
    res.writeHead(400).end("State mismatch. Close this tab and try again.");
    server.close();
    return;
  }

  const error = url.searchParams.get("error");
  if (error) {
    res.writeHead(400).end(`Spotify authorization failed: ${error}`);
    server.close();
    return;
  }

  const code = url.searchParams.get("code");
  if (!code) {
    res.writeHead(400).end("No authorization code was returned.");
    server.close();
    return;
  }

  try {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });
    const body = await tokenResponse.json();
    if (!tokenResponse.ok || !body.refresh_token) {
      throw new Error(JSON.stringify(body));
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h2>Spotify connected.</h2><p>You can close this tab and return to your terminal.</p>");

    console.log("\nSpotify authorization succeeded.\n");
    console.log("Copy this value into the GitHub repository secret SPOTIFY_REFRESH_TOKEN:\n");
    console.log(body.refresh_token);
    console.log("\nKeep it private. Do not commit it to the repository.\n");
  } catch (err) {
    res.writeHead(500).end("Token exchange failed. Check the terminal for details.");
    console.error("Spotify token exchange failed:", err);
  } finally {
    server.close();
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`\nWaiting for Spotify authorization at ${redirectUri}`);
  console.log("If a browser does not open, paste this URL into one:\n");
  console.log(authUrl.toString());
  console.log();
  openBrowser(authUrl.toString());
});
