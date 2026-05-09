#!/usr/bin/env bash
set -euo pipefail

DRIVE="/Users/davide/Library/CloudStorage/GoogleDrive-piga.davide@gmail.com/My Drive/Learning/Learn Career/UN Career Week 2026"
ARTICLES="$DRIVE/System/Toolkit/Toolkit Articles"
REPO="$(cd "$(dirname "$0")/.." && pwd)"

echo "Syncing from Drive to content/..."

cp "$ARTICLES/Pages/index.md"                "$REPO/content/index.md"
cp "$ARTICLES/Pages/about.md"                "$REPO/content/about.md"
cp "$ARTICLES/Pages/agenda-coverage-audit.md" "$REPO/content/agenda-coverage-audit.md"

cp "$ARTICLES/Dimensions/"*.md "$REPO/content/dimensions/"
cp "$ARTICLES/Frameworks/"*.md "$REPO/content/frameworks/"

if ls "$ARTICLES/Sessions/"*.md &>/dev/null 2>&1; then
  mkdir -p "$REPO/content/sessions"
  cp "$ARTICLES/Sessions/"*.md "$REPO/content/sessions/"
fi

echo "Done. Git status:"
git -C "$REPO" status --short

if [[ "${1:-}" == "--push" ]]; then
  git -C "$REPO" add content/
  git -C "$REPO" commit -m "Sync content from Drive"
  git -C "$REPO" push origin main
  echo "Pushed."
fi
