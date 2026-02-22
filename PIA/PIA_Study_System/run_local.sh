#!/bin/bash

# Configuration
VENV_DIR="venv"
PORT=8000

echo "🚀 Starting PIA Study System (Local Mode)..."

# 1. Check for Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: python3 could not be found."
    exit 1
fi

# 2. Virtual Environment Setup
if [ ! -d "$VENV_DIR" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv $VENV_DIR
fi

# Activate venv
source $VENV_DIR/bin/activate

# 3. Install Dependencies
echo "⬇️ Installing dependencies..."
# We use a lighter requirements file for local dev if possible, but for now use the backend one
# pip install -r backend/requirements.txt
# To save time if they match, we try to install only what's needed.
pip install fastapi uvicorn pandas numpy matplotlib scikit-learn

# 4. Generate Content
echo "📚 Generating content from PIA folders..."
python3 scripts/build_content.py

# 5. Start Backend
echo "🌍 Starting server at http://localhost:$PORT"
# We run uvicorn on the backend module, pointing to the app instance
# Backend directory needs to be in python path or we run from root and point to backend.main:app
export PYTHONPATH=$PYTHONPATH:$(pwd)/backend
uvicorn backend.main:app --host 0.0.0.0 --port $PORT --reload
