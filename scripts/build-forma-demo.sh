#!/usr/bin/env bash
# Statische FORMA Premium-Demo nach public/demos/forma-studio kopieren
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FORMA_DIR="$(cd "$ROOT/../forma-studio-video" && pwd)"
DEMO_BASE="${1:-/demos/forma-studio}"
OUT_DEST="$ROOT/public/demos/forma-studio"

LOCAL_NODE="$ROOT/.tools/node/bin"
if ! command -v npm >/dev/null 2>&1 && [[ -x "$LOCAL_NODE/npm" ]]; then
  export PATH="$LOCAL_NODE:$PATH"
fi

if [[ ! -d "$FORMA_DIR" ]]; then
  echo "forma-studio-video nicht gefunden: $FORMA_DIR" >&2
  exit 1
fi

echo "[forma-demo] Build mit basePath=${DEMO_BASE} …"
cd "$FORMA_DIR"
if [[ ! -d node_modules ]]; then
  npm install
fi
FORMA_STATIC_EXPORT=1 FORMA_DEMO_BASE_PATH="$DEMO_BASE" npm run build:embed

echo "[forma-demo] Kopiere nach ${OUT_DEST} …"
rm -rf "$OUT_DEST"
mkdir -p "$(dirname "$OUT_DEST")"
cp -a "$FORMA_DIR/out" "$OUT_DEST"

echo "[forma-demo] Fertig → ${DEMO_BASE}/index.html"
