#!/bin/bash

# NuvoCode UI Library Build Script

set -e

echo "🚀 Building NuvoCode UI Library..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

# Run tests
echo "🧪 Running tests..."
npm test

# Build the library
echo "🏗️  Building library..."
npm run build

# Check if build was successful
if [ -d "dist" ] && [ -f "dist/index.js" ] && [ -f "dist/index.d.ts" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Output files:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Ready to publish!"
echo "📝 Don't forget to:"
echo "   1. Update version in package.json"
echo "   2. Update CHANGELOG.md"
echo "   3. Test the build in a real project"
echo "   4. Run 'npm publish' when ready"
