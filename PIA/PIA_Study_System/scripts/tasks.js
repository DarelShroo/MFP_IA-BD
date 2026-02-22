/**
 * Code Tasks / Interactive Environment
 * Connects to the Docker backend to execute Python code.
 */

window.renderTasks = function() {
    // Switch view
    currentView = 'tasks';
    updateActiveNav();
    const pageTitle = document.getElementById('current-module-name');
    if(pageTitle) pageTitle.textContent = 'Interactive Tasks';

    const container = document.getElementById('content-display');
    
    // Check if backend is reachable (we could do a health check here, but let's just render)
    
    container.innerHTML = `
        <div class="dashboard-view fade-in">
            <div class="hero-card" style="border-left: 5px solid var(--accent-color);">
                <h3>💻 Entorno de Ejecución (Docker)</h3>
                <p>Ejecuta código Python real (Pandas, Numpy, Keras) directamente en el navegador.</p>
                <div class="status-indicator" id="api-status">
                    <span class="status-dot thinking"></span> Conectando al backend...
                </div>
            </div>

            <div class="flex-container" style="display:flex; gap:2rem; height: 600px; margin-top:2rem;">
                <!-- Task List -->
                <div class="task-sidebar" style="width:300px; background:var(--surface-color); padding:1rem; border-radius:8px; overflow-y:auto;">
                    <h4 style="margin-bottom:1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Ejercicios Disponibles</h4>
                    <div id="task-list">
                        <!-- Tasks Injected Here -->
                    </div>
                </div>

                <!-- Code Editor & Output -->
                <div class="code-workspace" style="flex:1; display:flex; flex-direction:column; gap:1rem;">
                    <div class="code-editor-container" style="flex:1; display:flex; flex-direction:column;">
                        <textarea id="code-editor" style="flex:1; background:#0d1117; color:#e5e7eb; font-family:'JetBrains Mono', monospace; padding:1rem; border:1px solid var(--border-color); border-radius:6px; resize:none; line-height:1.5; font-size:14px;" spellcheck="false"></textarea>
                    </div>
                    <div class="control-bar" style="display:flex; justify-content:flex-end;">
                        <button class="action-btn" id="run-code-btn" style="background:var(--primary-color); color:black; font-weight:bold;">▶ Ejecutar Código</button>
                    </div>
                    <div class="output-console" style="height:200px; background:#000; color:#0f0; font-family:monospace; padding:1rem; border-radius:6px; overflow-y:auto; border:1px solid #333;">
                        <div id="console-output">// Output will appear here...</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Tasks Data
    const tasks = [
        {
            id: 'task1',
            title: '1. Hello NumPy',
            desc: 'Crea un array de NumPy con los números del 1 al 10 y calcula su media.',
            starterCode: `import numpy as np\n\n# Tu código aquí\narr = np.array([1, 2, 3])\nprint("Media:", arr.mean())`
        },
        {
            id: 'task2',
            title: '2. Pandas DataFrame',
            desc: 'Crea un DataFrame con columnas "Nombre" y "Edad".',
            starterCode: `import pandas as pd\n\ndata = {\n    'Nombre': ['Ana', 'Luis', 'Carlos'],\n    'Edad': [25, 30, 22]\n}\n\ndf = pd.DataFrame(data)\nprint(df)`
        },
        {
            id: 'task3',
            title: '3. Keras Version',
            desc: 'Verifica la versión de TensorFlow y Keras instalada en el contenedor.',
            starterCode: `import tensorflow as tf\nfrom tensorflow import keras\n\nprint("TF Version:", tf.__version__)\nprint("Keras Version:", keras.__version__)`
        }
    ];

    // Render Task List
    const taskListEl = document.getElementById('task-list');
    const editor = document.getElementById('code-editor');
    
    tasks.forEach(task => {
        const btn = document.createElement('div');
        btn.className = 'panel hover-scale';
        btn.style.cursor = 'pointer';
        btn.style.padding = '0.75rem';
        btn.style.marginBottom = '0.5rem';
        btn.innerHTML = `<strong>${task.title}</strong><p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.2rem;">${task.desc}</p>`;
        
        btn.onclick = () => {
            editor.value = task.starterCode;
            // Highlight active task visually if needed
        };
        taskListEl.appendChild(btn);
    });

    // Default load
    editor.value = tasks[0].starterCode;

    // Run Logic
    const runBtn = document.getElementById('run-code-btn');
    const outputDiv = document.getElementById('console-output');
    const statusDot = document.getElementById('api-status');

    // Health Check
    fetch('http://localhost:8000/execute', { method: 'OPTIONS' }) // Hacky check if reachable
        .then(() => {
            statusDot.innerHTML = '<span class="status-dot online" style="background:#10b981; width:10px; height:10px; border-radius:50%; display:inline-block; margin-right:5px;"></span> Backend Online';
        })
        .catch(() => {
            statusDot.innerHTML = '<span class="status-dot offline" style="background:#ef4444; width:10px; height:10px; border-radius:50%; display:inline-block; margin-right:5px;"></span> Backend Disconnected (Is Docker running?)';
        });

    runBtn.onclick = async () => {
        runBtn.disabled = true;
        runBtn.textContent = 'Ejecutando...';
        outputDiv.textContent = '>> Enviando a Docker...';

        const code = editor.value;

        try {
            const response = await fetch('http://localhost:8000/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: code })
            });

            const result = await response.json();
            
            runBtn.disabled = false;
            runBtn.textContent = '▶ Ejecutar Código';

            if (result.stdout) {
                outputDiv.style.color = '#0f0';
                outputDiv.innerText = result.stdout;
            } else if (result.stderr) {
                outputDiv.style.color = '#ef4444';
                outputDiv.innerText = result.stderr;
            } else {
                outputDiv.innerText = '// No output';
            }
            
            if(result.exit_code !== 0) {
                 outputDiv.innerHTML += '\n\n[Process exited with error code ' + result.exit_code + ']';
            }

        } catch (error) {
            runBtn.disabled = false;
            runBtn.textContent = '▶ Ejecutar Código';
            outputDiv.style.color = '#ef4444';
            outputDiv.textContent = 'Error de conexión: Asegúrate de que el contenedor Docker está corriendo en el puerto 8000.\n\n' + error.message;
        }
    };
};
