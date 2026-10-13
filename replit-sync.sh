#!/usr/bin/env bash
# Sync this Replit workspace to the latest GitHub main and build it.
# Run from the Replit Shell:   bash replit-sync.sh
# Afterwards click "Republish" in the Replit Deployments panel.
#
# The Replit workspace is a deploy-only mirror. Any local commits or edits
# made here are discarded so that it always matches GitHub exactly.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Fetching origin/main"
git fetch origin main

echo "==> Resetting workspace to origin/main (local changes are discarded)"
git reset --hard origin/main
git clean -fd -e node_modules -e dist

echo "==> Installing dependencies from package-lock.json (npm ci, lockfile untouched)"
npm ci --no-audit --no-fund

echo "==> Building"
npm run build

echo
echo "Done. Now open the Deployments panel and click Republish."
git log -1 --oneline
