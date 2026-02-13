#!/bin/bash

echo "🚀 Deploying Jeeva's Portfolio to GitHub..."

# Initialize git if not already
if [ ! -d .git ]; then
    git init
    echo "✅ Git initialized"
fi

# Add all files
git add .

# Commit
echo "📝 Enter commit message (or press Enter for default):"
read commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio"
fi
git commit -m "$commit_msg"

# Set main branch
git branch -M main

# Add remote (update with your repo URL)
echo "🔗 Enter your GitHub repository URL:"
echo "Example: https://github.com/Jeeva-V-2003/portfolio.git"
read repo_url

if [ ! -z "$repo_url" ]; then
    git remote remove origin 2>/dev/null
    git remote add origin "$repo_url"
    echo "✅ Remote added"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✨ Done! Now deploy on Vercel:"
echo "1. Go to https://vercel.com/new"
echo "2. Import your GitHub repository"
echo "3. Click Deploy"
echo ""
echo "Your portfolio will be live in 30 seconds! 🎉"
