#!/bin/bash
# ================================================
# CLARIX COMPLIANCE — GitHub Pages Deploy Script
# Run this once to create repo + upload website
# ================================================

set -e

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Clarix Compliance — GitHub Deploy      ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# ── STEP 1: Check Git is installed ──
if ! command -v git &> /dev/null; then
  echo "❌  Git is not installed. Download from https://git-scm.com and re-run."
  exit 1
fi
echo "✓  Git found: $(git --version)"

# ── STEP 2: Ask for GitHub username ──
echo ""
read -p "Enter your GitHub username: " GH_USER
if [ -z "$GH_USER" ]; then
  echo "❌  Username cannot be empty."
  exit 1
fi

REPO_NAME="clarix-website"
REPO_URL="https://github.com/${GH_USER}/${REPO_NAME}.git"

echo ""
echo "→  Repository will be: ${REPO_URL}"
echo ""

# ── STEP 3: Navigate to website folder ──
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "✓  Working directory: $SCRIPT_DIR"

# ── STEP 4: Check required files exist ──
if [ ! -f "index.html" ]; then
  echo "❌  index.html not found. Make sure you run this script"
  echo "    from INSIDE the clarix-v3 folder."
  exit 1
fi
echo "✓  Website files found"

# ── STEP 5: Init Git repo ──
if [ ! -d ".git" ]; then
  git init
  echo "✓  Git repository initialised"
else
  echo "✓  Git repository already exists"
fi

# ── STEP 6: Configure Git (if not already set) ──
if [ -z "$(git config user.email)" ]; then
  read -p "Enter your email for Git commits: " GIT_EMAIL
  git config user.email "$GIT_EMAIL"
  git config user.name "$GH_USER"
fi

# ── STEP 7: Add all files ──
git add -A
git commit -m "Initial deploy: Clarix Compliance website v1.0" 2>/dev/null || \
  echo "✓  Nothing new to commit (already up to date)"

# ── STEP 8: Set remote ──
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
git branch -M main

echo ""
echo "══════════════════════════════════════════════"
echo "  NEXT: Create the GitHub repository"
echo "══════════════════════════════════════════════"
echo ""
echo "  1. Open this URL in your browser:"
echo "     https://github.com/new"
echo ""
echo "  2. Fill in:"
echo "     Repository name:  clarix-website"
echo "     Visibility:       Public  ← required for free GitHub Pages"
echo "     (leave everything else blank)"
echo ""
echo "  3. Click 'Create repository'"
echo ""
read -p "Press ENTER when the repository is created on GitHub..."

# ── STEP 9: Push ──
echo ""
echo "→  Pushing files to GitHub..."
git push -u origin main

echo ""
echo "✓  Files uploaded successfully!"
echo ""
echo "══════════════════════════════════════════════"
echo "  ENABLE GITHUB PAGES"
echo "══════════════════════════════════════════════"
echo ""
echo "  1. Go to: https://github.com/${GH_USER}/${REPO_NAME}/settings/pages"
echo "  2. Source → 'Deploy from a branch'"
echo "  3. Branch → 'main'  /  Folder → '/ (root)'"
echo "  4. Click Save"
echo ""
echo "  Your site will be live at:"
echo "  https://${GH_USER}.github.io/${REPO_NAME}/"
echo ""
echo "══════════════════════════════════════════════"
echo "  CONNECT clarixcompliance.com"
echo "══════════════════════════════════════════════"
echo ""
echo "  At your domain registrar, add these DNS records:"
echo ""
echo "  Type   Name   Value"
echo "  A      @      185.199.108.153"
echo "  A      @      185.199.109.153"
echo "  A      @      185.199.110.153"
echo "  A      @      185.199.111.153"
echo "  CNAME  www    ${GH_USER}.github.io"
echo ""
echo "  Then in GitHub Pages settings:"
echo "  → Custom domain: clarixcompliance.com"
echo "  → Check 'Enforce HTTPS'"
echo ""
echo "  DNS propagation takes 10 min – 48 hours."
echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Done! clarixcompliance.com is live 🎉  ║"
echo "╚══════════════════════════════════════════╝"
echo ""
