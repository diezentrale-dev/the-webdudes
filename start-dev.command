#!/bin/bash
# Doppelklick im Finder: startet den Dev-Server und öffnet den Browser.
set -e
cd "$(dirname "$0")"

TOOLS_NODE="$(pwd)/.tools/node-v20.18.1-darwin-arm64/bin"
if [ -x "$TOOLS_NODE/node" ]; then
  export PATH="$TOOLS_NODE:$PATH"
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm nicht gefunden. Bitte Node.js installieren: https://nodejs.org"
  echo "Oder dieses Skript erneut ausführen, nachdem portable Node unter .tools/ liegt."
  read -r _
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installiere Abhängigkeiten …"
  npm install
fi

echo "Starte http://localhost:3000 (mit frischem .next-Cache) …"
# Browser erst öffnen, wenn der Server Zeit zum Start hat; vermeidet leere/fehlerhafte erste Antwort.
(sleep 5 && open "http://localhost:3000") &
exec npm run dev
