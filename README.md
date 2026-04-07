# BrainDump — Mac App

Capture ideas, photos, and voice memos in a beautiful mood board.

## Setup (one time)

You need Node.js installed. If you don't have it, download from https://nodejs.org

```bash
# 1. Install dependencies
npm install

# 2. Run the app
npm start
```

## Build a distributable .dmg

```bash
npm run build
# Output will be in the /dist folder
```

## Features

- **Text notes** — dump a thought in seconds
- **Ideas** — mark something as an "idea" with special highlight
- **Photo capture** — pick any image from your Mac
- **Audio recording** — record voice memos directly in the app
- **Mood board grid** — all your captures in a visual card grid
- **Filter by type** — view all, photos, audio, ideas, or notes
- **Tap any card** to view full detail, edit text, or delete
- **Persists locally** — all data saved to ~/.braindump on your Mac

## Data location

All ideas and media are stored in `~/.braindump/`
- `ideas.json` — all idea metadata
- `media/` — photos and audio files