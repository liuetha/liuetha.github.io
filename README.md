# Ethan Liu’s portfolio

A simple Next.js portfolio with a short introduction, four project links, individual project pages, and an optional Spotify-powered recent-listens section.

## Run locally

Use Node.js 22, matching the included GitHub Pages workflow.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Edit the content

- `app/page.tsx`: opening sentence and about section.
- `data/projects.ts`: project summaries, contributions, and detail-page copy.
- `components/Footer.tsx`: email address and LinkedIn.
- `components/Music.tsx`: homepage music section.
- `SPOTIFY_SETUP.md`: private Spotify/GitHub Actions setup.
- `app/globals.css`: layout, typography, and colours.

## Build

```bash
npm run build
```

The static website is generated in `out/`. The existing GitHub Pages workflow builds and deploys it when changes are pushed to `main`.

If copying this version over the previous project, remove the old `components/ProjectReel.tsx` and default `app/favicon.ico`. They are no longer used. Keep your repository’s `.git` directory.

The design uses system fonts and does not require external fonts, image services, or animation packages.

## Spotify recent listens

The Music section can update automatically from Spotify without putting private credentials in the website. Follow `SPOTIFY_SETUP.md`.
