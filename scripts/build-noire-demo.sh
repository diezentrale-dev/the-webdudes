#!/usr/bin/env bash
# Statische NOIRÉ Awesome-Demo nach public/demos/noire kopieren
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NOIRE_DIR="$(cd "$ROOT/../mode-brand-demo" && pwd)"
DEMO_BASE="${1:-/demos/noire}"
OUT_DEST="$ROOT/public/demos/noire"

LOCAL_NODE="$ROOT/.tools/node/bin"
if ! command -v npm >/dev/null 2>&1 && [[ -x "$LOCAL_NODE/npm" ]]; then
  export PATH="$LOCAL_NODE:$PATH"
fi

if [[ ! -d "$NOIRE_DIR" ]]; then
  echo "mode-brand-demo nicht gefunden: $NOIRE_DIR" >&2
  exit 1
fi

echo "[noire-demo] Build mit basePath=${DEMO_BASE} …"
cd "$NOIRE_DIR"
if [[ ! -d node_modules ]]; then
  npm install
fi
NOIRE_DEMO_BASE_PATH="$DEMO_BASE" npm run build:embed

echo "[noire-demo] Kopiere nach ${OUT_DEST} …"
rm -rf "$OUT_DEST"
mkdir -p "$(dirname "$OUT_DEST")"
cp -a "$NOIRE_DIR/out" "$OUT_DEST"

# Next-RSC-Artefakte — im iframe nicht nötig
find "$OUT_DEST" -name 'index.txt' -delete 2>/dev/null || true

echo "[noire-demo] Fertig → ${DEMO_BASE}/index.html"
