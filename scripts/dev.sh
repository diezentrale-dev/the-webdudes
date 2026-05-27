#!/usr/bin/env bash
# Entwicklungsserver mit Schutz vor den häufigsten Ursachen für fehlende Styles/Chunks:
# - optionaler Clean von .next (NEXT_DEV_CLEAN=1 oder Argument --clean)
# - Port-Check: verhindert, dass ein alter next dev weiterläuft und der Browser „kaputte“ Assets lädt
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Lokales Node (falls systemweit kein npm im PATH — z. B. frischer Mac / Cursor-Terminal)
LOCAL_NODE="$ROOT/.tools/node/bin"
if ! command -v npm >/dev/null 2>&1 && [[ -x "$LOCAL_NODE/npm" ]]; then
  export PATH="$LOCAL_NODE:$PATH"
fi

PORT="${PORT:-3000}"

if [[ "${1:-}" == "--clean" ]]; then
  export NEXT_DEV_CLEAN=1
fi

# Standard: kein Clean (verhindert ENOENT/500, wenn .next während eines laufenden dev gelöscht wird).
# Frischer Build: npm run dev:clean  oder  NEXT_DEV_CLEAN=1 npm run dev  oder  npm run clean && npm run dev
if [[ "${NEXT_DEV_CLEAN:-0}" == "1" ]]; then
  echo "[dev] Entferne .next und Webpack-/Turbopack-Cache …"
  rm -rf .next node_modules/.cache
else
  echo "[dev] Cache bleibt (NEXT_DEV_CLEAN=0). Bei fehlenden Chunks: npm run dev:clean"
fi

port_in_use() {
  if command -v lsof >/dev/null 2>&1; then
    lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1
    return $?
  fi
  if command -v nc >/dev/null 2>&1; then
    nc -z localhost "$PORT" >/dev/null 2>&1
    return $?
  fi
  return 1
}

if port_in_use; then
  echo ""
  echo "Port $PORT ist bereits belegt (oft ein alter „next dev“-Prozess)."
  echo "Ohne freien Port kann der neue Dev-Server nicht starten – die Seite wirkt dann"
  echo "unverändert oder zeigt fehlende Styles/Chunks (Browser lädt noch alte Bundles)."
  echo ""
  echo "Beenden z. B. mit:"
  echo "  lsof -nP -iTCP:$PORT -sTCP:LISTEN"
  echo "  kill \$(lsof -tiTCP:$PORT -sTCP:LISTEN)"
  echo ""
  exit 1
fi

# Turbopack im Dev: weniger fehleranfällig als Webpack-HMR bei korrupten Chunks (vgl. __webpack_modules__-Fehler).
exec npx next dev --turbo -p "$PORT"
