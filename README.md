# Semantic Release Template

Dieses Repository enthält ein vollständiges Setup für Semantic Release mit GitHub Actions.

## Setup

1. Repository klonen
2. `GH_TOKEN` als Secret setzen
3. `npm install`
4. Erste Commits im Format `feat: ...`, `fix: ...`, etc.
5. Push → Release wird automatisch erstellt

## Struktur

- `.releaserc.js`: Konfiguration
- `.github/workflows/release.yml`: Workflow
- `upload-local-elf.sh`: Dummy-Skript für Firmware-Upload
- `src/version.h`: Versionsheader
