#!/usr/bin/env bash
set -euo pipefail

rm -rf .amplify-hosting
mkdir -p .amplify-hosting/compute/default
mkdir -p .amplify-hosting/static

# 1) Copia o build inteiro (mantém dist/ e dist/public/)
cp -R dist .amplify-hosting/compute/default/dist

# 2) Cria o entrypoint "index.cjs" na raiz do compute/default (shim)
cat > .amplify-hosting/compute/default/index.cjs <<'EOF'
require("./dist/index.cjs");
EOF

# 3) Copia dependências de runtime (prune dev deps antes!)
#    (Se seu server bundle for realmente standalone, você pode remover esta parte.)
cp -R node_modules .amplify-hosting/compute/default/node_modules

# 4) Static assets (CDN do Amplify)
cp -R dist/public/* .amplify-hosting/static

# 5) Manifest
cp deploy-manifest.json .amplify-hosting/deploy-manifest.json