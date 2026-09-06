# Spotify top-tracks setup

The website displays the four tracks Spotify ranks highest for your account over its `short_term` time range, which Spotify defines as approximately the last four weeks. The public page never receives your Spotify client secret or refresh token. A private GitHub Actions workflow fetches the data and writes only the public track information to `public/data/top-tracks.json`.

## If you already set up the previous recently-played version

You do **not** need a new Spotify app, Client ID, Client Secret, redirect URI, or GitHub secret names.

You **do** need to authorize once again because the top-tracks endpoint uses a different Spotify permission (`user-top-read`). From PowerShell in the website folder:

```powershell
$env:SPOTIFY_CLIENT_ID="your-client-id"
$env:SPOTIFY_CLIENT_SECRET="your-client-secret"
npm run spotify:authorize
```

Approve the Spotify permission page. Copy the new refresh token, then replace the value of the existing `SPOTIFY_REFRESH_TOKEN` repository secret in GitHub.

Your existing `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` secrets stay unchanged.

## Fresh setup

### 1. Create a Spotify developer app

1. Sign in to the Spotify Developer Dashboard.
2. Create an app and enable the Web API.
3. Add this redirect URI exactly:

   `http://127.0.0.1:8888/callback`

4. Copy the app’s Client ID and Client Secret.

### 2. Authorize your Spotify account

From PowerShell in the website folder:

```powershell
$env:SPOTIFY_CLIENT_ID="your-client-id"
$env:SPOTIFY_CLIENT_SECRET="your-client-secret"
npm run spotify:authorize
```

Approve access. The terminal will print a refresh token. Keep it private.

### 3. Add GitHub repository secrets

Under **Settings → Secrets and variables → Actions**, add:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

### 4. Test locally

```powershell
$env:SPOTIFY_REFRESH_TOKEN="your-refresh-token"
npm run spotify:update
npm run dev
```

The Music section should show the four top tracks Spotify returns for approximately the last four weeks.

### 5. Test GitHub Actions

Open **Actions → Update top Spotify tracks → Run workflow**.

The workflow checks once per day and updates `public/data/top-tracks.json` only when the top four change.

## Note on “past month”

Spotify does not expose an exact calendar-month play-count leaderboard through this endpoint. `short_term` is an affinity ranking calculated over approximately the last four weeks, so the website labels it “Top tracks · past 4 weeks.”
