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
npm run build:pages

touch out/.nojekyll

# Sofort-Weiterleitung / → /v2/ (wie lokal localhost:3000/v2)
cat > out/index.html <<EOF
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=${BASE_PATH}/v2/" />
  <script>location.replace("${BASE_PATH}/v2/");</script>
  <title>The WebDudes · Weiterleitung</title>
</head>
<body>
  <p><a href="${BASE_PATH}/v2/">Zur v2-Vorschau</a></p>
</body>
</html>
EOF

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

echo "[pages] Live: https://${REPO%%/*}.github.io${BASE_PATH}/v2/"
