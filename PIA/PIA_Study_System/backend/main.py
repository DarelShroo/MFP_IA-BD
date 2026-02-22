from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import os
import sys

app = FastAPI()

# Allow CORS for local development if running frontend separately
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str

@app.post("/execute")
async def execute_code(request: CodeRequest):
    """
    Executes Python code sent from the frontend and returns the output.
    WARNING: This is a study tool. Arbitrary code execution is dangerous in production.
    """
    try:
        # Write code to a temporary file
        with open("temp_script.py", "w") as f:
            f.write(request.code)

        # Run the script and capture output
        result = subprocess.run(
            [sys.executable, "temp_script.py"],
            capture_output=True,
            text=True,
            timeout=10  # 10 second timeout
        )
        
        return {
            "stdout": result.stdout,
            "stderr": result.stderr,
            "exit_code": result.returncode
        }
    except subprocess.TimeoutExpired:
        return {"stdout": "", "stderr": "Error: Execution timed out (10s limit).", "exit_code": -1}
    except Exception as e:
        return {"stdout": "", "stderr": str(e), "exit_code": -1}

# Mount the entire PIA Study System project as static files
# This allows opening localhost:8000 and seeing the index.html
# We assume the backend folder is inside PIA_Study_System, so we go up one level.
# Mount static files
static_dir = os.environ.get("STATIC_DIR", os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
if not os.path.exists(static_dir):
    print(f"Warning: Static directory {static_dir} does not exist.")
else:
    app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")
