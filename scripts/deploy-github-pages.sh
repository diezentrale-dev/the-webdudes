#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LOCAL_NODE="$ROOT/.tools/node/bin"
if ! command -v npm >/dev/null 2>&1 && [[ -x "$LOCAL_NODE/npm" ]]; then
  export PATH="$LOCAL_NODE:$PATH"
fi

REPO="${GITHUB_REPOSITORY:-diezentrale-dev/the-webdudes}"
BASE_PATH="/${REPO##*/}"

echo "[pages] Build für GitHub Pages (${BASE_PATH}) …"
GITHUB_PAGES=true \
NEXT_PUBLIC_BASE_PATH="$BASE_PATH" \
NEXT_PUBLIC_V2_ONLY=true \
NEXT_PUBLIC_SITE_PASSWORD="${NEXT_PUBLIC_SITE_PASSWORD:-0601}" \
npm run build:pages

touch out/.nojekyll

echo "[pages] Push nach gh-pages …"
(
  cd out
  git init -q
  git config user.email "deploy@thewebdudes.de"
  git config user.name "GitHub Pages Deploy"
  git add -A
  git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git branch -M gh-pages
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/${REPO}.git"
  git push -f origin gh-pages
)

echo "[pages] Live: https://${REPO%%/*}.github.io${BASE_PATH}/"
