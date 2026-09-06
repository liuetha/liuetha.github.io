import fs from "node:fs/promises";
import path from "node:path";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

if (!clientId || !clientSecret || !refreshToken) {
  console.error("Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REFRESH_TOKEN.");
  process.exit(1);
}

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  }),
});

const tokenBody = await tokenResponse.json();
if (!tokenResponse.ok) {
  if (tokenBody?.error === "invalid_grant") {
    console.error(
      "Spotify rejected the refresh token. Re-run `npm run spotify:authorize` and replace the SPOTIFY_REFRESH_TOKEN GitHub secret."
    );
  } else {
    console.error(`Spotify token refresh failed: ${JSON.stringify(tokenBody)}`);
  }
  process.exit(1);
}

if (tokenBody.refresh_token && tokenBody.refresh_token !== refreshToken) {
  console.warn(
    "Spotify returned a replacement refresh token. Update the SPOTIFY_REFRESH_TOKEN GitHub secret with the new token before the old one stops working."
  );
}

const topResponse = await fetch(
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=4",
  { headers: { Authorization: `Bearer ${tokenBody.access_token}` } }
);

const topBody = await topResponse.json();
if (!topResponse.ok) {
  if (topResponse.status === 403) {
    console.error(
      "Spotify denied access to top tracks. Re-run `npm run spotify:authorize` to grant the `user-top-read` scope, then replace SPOTIFY_REFRESH_TOKEN."
    );
  } else {
    console.error(`Top tracks request failed: ${JSON.stringify(topBody)}`);
  }
  process.exit(1);
}

const tracks = (topBody.items ?? []).slice(0, 4).map((track, index) => ({
  id: track.id,
  rank: index + 1,
  title: track.name ?? "Unknown track",
  artist: (track.artists ?? []).map((artist) => artist.name).filter(Boolean).join(", "),
  album: track.album?.name ?? "",
  image: track.album?.images?.[0]?.url ?? null,
  url: track.external_urls?.spotify ?? `https://open.spotify.com/track/${track.id}`,
}));

const outputPath = path.join(process.cwd(), "public", "data", "top-tracks.json");
let existing = { generatedAt: null, tracks: [] };
try {
  existing = JSON.parse(await fs.readFile(outputPath, "utf8"));
} catch {
  // First run. The file will be created below.
}

if (JSON.stringify(existing.tracks ?? []) === JSON.stringify(tracks)) {
  console.log("No change in the top four tracks from the past four weeks.");
  process.exit(0);
}

const output = {
  generatedAt: new Date().toISOString(),
  timeRange: "short_term",
  tracks,
};

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Updated ${outputPath} with ${tracks.length} top track(s).`);
