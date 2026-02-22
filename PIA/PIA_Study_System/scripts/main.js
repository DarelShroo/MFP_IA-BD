// Data loaded globally via data.js

// State
let currentModuleId = null;
let currentView = 'dashboard'; 

// DOM Elements
const contentArea = document.getElementById('content-display');
const moduleList = document.getElementById('module-nav');
const pageTitle = document.getElementById('current-module-name');
const navBtns = document.querySelectorAll('.nav-btn');

// Initialization
function init() {
    console.log("PIA System Initializing...");
    
    // Strict Check
    if (!window.piaData) {
        console.error("CRITICAL: window.piaData is missing. Check data.js loading.");
        contentArea.innerHTML = `<div class="warning-box">Error Crítico: No se han cargado los datos del curso PIA.</div>`;
        return;
    }

    renderSidebar();
    setupNavigation();
    updateDashboardStats();
}

function renderSidebar() {
    moduleList.innerHTML = '';
    const data = window.piaData;

    data.modules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.view = 'module';
        btn.dataset.id = mod.id;
        // Use monospace font for module IDs for code feel
        btn.innerHTML = `<span class="icon" style="opacity:0.7">&lt;/&gt;</span> ${mod.id}`;
        btn.onclick = () => loadModule(mod.id);
        moduleList.appendChild(btn);
    });

    // Add Docker Tasks Button
    const tasksBtn = document.createElement('button');
    tasksBtn.className = 'nav-btn';
    tasksBtn.style.borderTop = '1px solid var(--border-color)';
    tasksBtn.style.marginTop = '1rem';
    tasksBtn.innerHTML = `<span class="icon">🐳</span> Docker Lab`;
    tasksBtn.onclick = () => {
        if (window.renderTasks) window.renderTasks();
        else alert("Task script not loaded");
    };
    moduleList.appendChild(tasksBtn);
}

function setupNavigation() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = btn.dataset.view;
            if (view === 'dashboard') loadDashboard();
            if (view === 'glossary') loadGlossary();
            if (view === 'codegym') loadCodeGym(); // New Feature
        });
    });
}

function updateActiveNav(id) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // Find button
    let selector = `[data-view="${currentView}"]`;
    if (currentView === 'module') {
        selector += `[data-id="${id}"]`;
    }
    const activeBtn = document.querySelector(selector);
    if (activeBtn) activeBtn.classList.add('active');
}

function updateDashboardStats() {
    const data = window.piaData;
    if (!data) return;
    
    // Update sidebar progress
    const progressText = document.getElementById('global-progress');
    const circle = document.querySelector('.progress-ring__circle');
    
    // logic to calculate progress could go here, for now default to 0
    if (progressText) progressText.textContent = '0%';
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }
}

// Views
function loadDashboard() {
    const data = window.piaData;
    currentView = 'dashboard';
    currentModuleId = null;
    pageTitle.textContent = 'Dashboard de Desarrollo';
    updateActiveNav();
    
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
            <div class="hero-card" style="border-left: 5px solid var(--primary-color);">
                <h3>PIA: Programación de IA</h3>
                <p>Entorno de aprendizaje técnico. Domina el stack de Python para Inteligencia Artificial.</p>
                <div style="margin-top: 1rem; display: flex; gap: 1rem;">
                    <button class="action-btn" onclick="loadCodeGym()">🚀 Ir al Gimnasio de Código</button>
                    <button class="action-btn" onclick="loadModule('PIA01')" style="background:transparent; border:1px solid var(--border-color);">Comenzar Teoría</button>
                </div>
            </div>
            
            <h4 style="margin: 2rem 0 1rem 0; color: var(--text-secondary); text-transform:uppercase; font-size:0.8rem; letter-spacing:0.1em;">Estadísticas del Repositorio</h4>
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number" style="color:var(--primary-color); font-family:'JetBrains Mono'">${data.modules.length}</span>
                    <span class="stat-label">Módulos</span>
                </div>
                 <div class="stat-card">
                    <span class="stat-number" style="color:var(--secondary-color); font-family:'JetBrains Mono'">0%</span>
                    <span class="stat-label">Coverage</span>
                </div>
                 <div class="stat-card">
                    <span class="stat-number" style="color:var(--accent-color); font-family:'JetBrains Mono'">0</span>
                    <span class="stat-label">Lines of Code</span>
                </div>
            </div>
        </div>
    `;
}

function loadModule(id) {
    const data = window.piaData;
    currentView = 'module';
    currentModuleId = id;
    const module = data.modules.find(m => m.id === id);
    if (!module) return;

    pageTitle.textContent = `${module.id} :: ${module.title}`; // Code-style title
    updateActiveNav(id);

    // Template
    const templateContent = `
        <header class="module-header slide-in">
            <h1 class="module-title">${module.title}</h1>
            <p class="module-desc" style="font-family:'JetBrains Mono'; color:var(--text-secondary);">// ${module.description}</p>
            <div class="module-actions">
                <button class="action-btn" data-action="read">📄 Docs</button>
                <button class="action-btn" data-action="flashcards">🗃️ Flashcards</button>
                <button class="action-btn" data-action="quiz">⚡ Test Unitario</button>
                <button class="action-btn" data-action="code-puzzle">🧩 Code Puzzle</button> 
                <button class="action-btn" data-action="lab" style="border-color:var(--primary-color);">🧪 Laboratorio</button>
            </div>
        </header>
        <div class="module-content-placeholder"></div>
    `;
    
    contentArea.innerHTML = templateContent;
    

    // Bind Actions
    contentArea.querySelector('[data-action="read"]').onclick = () => renderReadMode(module);
    contentArea.querySelector('[data-action="flashcards"]').onclick = () => renderFlashcards(module);
    contentArea.querySelector('[data-action="quiz"]').onclick = () => renderQuiz(module);
    contentArea.querySelector('[data-action="lab"]').onclick = () => renderLiveCode(module);
    
    // New Action for Code Puzzle
    contentArea.querySelector('[data-action="code-puzzle"]').onclick = () => {
        if (window.renderCodePuzzle) {
            window.renderCodePuzzle(module);
        } else {
            console.error("renderCodePuzzle not loaded");
            alert("Error: code_puzzles.js not loaded.");
        }
    };
    
    // Default to Read Mode
    renderReadMode(module);
}

// Sub-Views

function renderReadMode(module) {
    const container = document.querySelector('.module-content-placeholder');
    const content = document.createElement('div');
    content.id = 'active-mode-content';
    content.className = 'fade-in';
    
    if(module.sections) {
         module.sections.forEach((sec, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'study-section slide-in';
            sectionEl.style.animationDelay = `${index * 0.1}s`;
            // Add line numbers effect to pre blocks if handled by CSS, or just keep it clean
            sectionEl.innerHTML = `
                <h3>${sec.title}</h3>
                ${sec.text}
            `;
            content.appendChild(sectionEl);
        });
    }

    if(container) container.replaceWith(content);
    else {
        const existing = document.getElementById('active-mode-content');
        if(existing) existing.replaceWith(content);
    }
}

function renderLiveCode(module) {
    const existing = document.getElementById('active-mode-content');
    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'fade-in';
    
    // Get challenges
    const challenges = module.codingChallenges || [];
    const defaultChallenge = {
        title: "Playground Libre",
        description: "Experimenta con Python. Puedes usar pandas, numpy, etc.",
        initialCode: "print('Hola! El entorno Python está listo.')\nimport sys\nprint(sys.version)",
        hint: "Escribe tu código y pulsa Ejecutar."
    };

    const hasChallenges = challenges.length > 0;
    const activeChallenge = hasChallenges ? challenges[0] : defaultChallenge;

    // Challenge Selector HTML
    let selectorHTML = '';
    if (hasChallenges) {
        selectorHTML = `
            <div class="lab-controls" style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                <label style="color:var(--text-secondary); font-size:0.9rem; margin-right: 0.5rem;">📚 Ejercicio:</label>
                <select id="exercise-select" class="badge" style="background:#1e1e1e; border:1px solid var(--border-color); color:white; padding: 0.5rem; cursor:pointer;">
                    ${challenges.map((c, i) => `<option value="${i}">${c.title}</option>`).join('')}
                </select>
                <div id="exercise-desc" class="card" style="margin-top:1rem; font-size:0.9rem; color:#d4d4d4; background:#252526;">
                    <strong style="color:var(--primary-color)">Instrucciones:</strong><br>
                    ${activeChallenge.description}
                </div>
            </div>
        `;
    } else {
         selectorHTML = `<div class="card" style="margin-bottom:1rem; background:rgba(16, 185, 129, 0.1); border-color:var(--primary-color);">💡 Modo Playground Libre. No hay ejercicios predefinidos para este módulo.</div>`;
    }

    container.innerHTML = `
        ${selectorHTML}
        <div class="split-view">
            <div class="code-editor-container">
                <div class="editor-toolbar">
                    <span class="editor-title">📄 main.py</span>
                    <button class="action-btn small" id="run-code-btn" style="padding: 0.2rem 0.8rem; background:var(--primary-color); color:#000; border:none;">▶ Ejecutar</button>
                </div>
                <textarea id="code-input" spellcheck="false">${activeChallenge.initialCode}</textarea>
            </div>
            
            <div class="terminal-panel">
                <div class="terminal-header">
                    <span>🖥️ Terminal Output</span>
                    <button class="action-btn small" id="clear-term" style="background:transparent; border:none; color:var(--text-secondary)">🚫 Clear</button>
                </div>
                <div class="terminal-output" id="term-out">
                    <div class="system">// Entorno Python 3.10+ listo.</div>
                    <div class="system" style="margin-top:0.5rem; color:var(--text-secondary)">> Esperando ejecución...</div>
                </div>
            </div>
        </div>
    `;

    if(existing) existing.replaceWith(container);

    // BINDING
    const runBtn = container.querySelector('#run-code-btn');
    const codeInput = container.querySelector('#code-input');
    const termOut = container.querySelector('#term-out');
    const clearBtn = container.querySelector('#clear-term');
    const select = container.querySelector('#exercise-select');
    const descBox = container.querySelector('#exercise-desc');

    // Handle Selection Change
    if (select) {
        select.addEventListener('change', (e) => {
            const idx = e.target.value;
            const selected = challenges[idx];
            
            // Only update if user confirms or if plain overwrite is desired. 
            // For now, simple overwrite. Adding a confirmation might be nice but let's keep it fluid.
            codeInput.value = selected.initialCode;
            descBox.innerHTML = `<strong style="color:var(--primary-color)">Instrucciones:</strong><br>${selected.description}`;
        });
    }

    runBtn.onclick = () => {
        const code = codeInput.value;
        runBtn.disabled = true;
        runBtn.innerHTML = '⏳ ...';
        
        const startLine = document.createElement('div');
        startLine.className = 'system';
        startLine.textContent = '> python3 main.py';
        termOut.appendChild(startLine);

        fetch('http://localhost:8000/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        })
        .then(res => res.json())
        .then(data => {
            if(data.output) { // Assuming backend returns 'output' key for stdout+stderr logic or separated
                 // The backend actually returns { output: "...", error: "..." } based on previous calls
                 if (data.output) {
                    const out = document.createElement('div');
                    out.className = 'stdout';
                    out.innerHTML = data.output.replace(/\n/g, '<br>');
                    termOut.appendChild(out);
                 }
                 if (data.error) {
                    const err = document.createElement('div');
                    err.className = 'stderr';
                    err.innerHTML = data.error.replace(/\n/g, '<br>');
                    termOut.appendChild(err);
                 }
            } else {
                // Fallback if structure is different
                if(data.stdout) {
                    const out = document.createElement('div');
                    out.className = 'stdout';
                    out.textContent = data.stdout;
                    termOut.appendChild(out);
                }
                if(data.stderr) {
                     const err = document.createElement('div');
                     err.className = 'stderr';
                     err.textContent = data.stderr;
                     termOut.appendChild(err);
                }
            }
            termOut.scrollTop = termOut.scrollHeight;
        })
        .catch(err => {
            const errDiv = document.createElement('div');
            errDiv.className = 'stderr';
            errDiv.textContent = 'Error: ' + err.message;
            termOut.appendChild(errDiv);
        })
        .finally(() => {
            runBtn.disabled = false;
            runBtn.innerHTML = '▶ Ejecutar';
        });
    };

    clearBtn.onclick = () => {
        termOut.innerHTML = '<div class="system">// Limpio</div>';
    };
    
    // Tab support
    codeInput.addEventListener('keydown', function(e) {
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 4;
        }
    });
}
// kept other functions...

function renderFlashcards(module) {
    const existing = document.getElementById('active-mode-content');
    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'fade-in';
    
    // Header for Flashcards view
    const header = document.createElement('div');
    header.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: var(--text-secondary); font-family: 'JetBrains Mono'">
            // Flashcards: ${module.flashcards ? module.flashcards.length : 0} items
        </h3>
    `;
    container.appendChild(header);

    if (!module.flashcards || module.flashcards.length === 0) {
        container.innerHTML += '<p class="text-center" style="font-family:monospace; color:var(--text-secondary);">// No flashcards found for this module</p>';
    } else {
        const grid = document.createElement('div');
        grid.className = 'flashcard-container';
        
        module.flashcards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'flashcard';
            cardEl.innerHTML = `
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <p style="font-weight:600; font-size:1.1rem;">${card.term || card.question}</p>
                    </div>
                    <div class="flashcard-back">
                        <p>${card.definition || card.answer}</p>
                    </div>
                </div>
            `;
            // Add click event to toggle flip
            cardEl.addEventListener('click', () => {
                cardEl.classList.toggle('flipped');
            });
            grid.appendChild(cardEl);
        });
        
        container.appendChild(grid);
    }

    if(existing) existing.replaceWith(container);
}

function renderQuiz(module) {
    const existing = document.getElementById('active-mode-content');
    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'quiz-container fade-in';

    const quizzes = module.quiz;
    
    if(!quizzes || quizzes.length === 0) {
        container.innerHTML = '<p class="text-center">No unit tests available.</p>';
    } else {
         quizzes.forEach((q, idx) => {
            const qEl = document.createElement('div');
            qEl.className = 'quiz-question';
            qEl.innerHTML = `
                <h3 style="font-family:'JetBrains Mono'">Test Case #${idx + 1}: ${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <div class="quiz-option" data-idx="${i}" style="font-family:'JetBrains Mono'">${opt}</div>
                    `).join('')}
                </div>
                <div class="test-result" style="margin-top:0.5rem; font-size:0.9rem; font-family:monospace;"></div>
            `;
            
            // Interaction
            const options = qEl.querySelectorAll('.quiz-option');
            const resultDiv = qEl.querySelector('.test-result');

            options.forEach(opt => {
                opt.addEventListener('click', () => {
                    options.forEach(o => {
                        o.classList.remove('selected', 'correct', 'incorrect');
                        o.style.pointerEvents = 'none';
                    });
                    
                    const selectedIdx = parseInt(opt.dataset.idx);
                    if (selectedIdx === q.answer) {
                        opt.classList.add('correct');
                        resultDiv.textContent = '>> Test Passed ✅';
                        resultDiv.style.color = 'var(--primary-color)';
                    } else {
                        opt.classList.add('incorrect');
                        options[q.answer].classList.add('correct');
                        resultDiv.textContent = '>> Test Failed ❌';
                        resultDiv.style.color = '#f85149';
                    }
                });
            });

            container.appendChild(qEl);
         });
    }

    if(existing) existing.replaceWith(container);
}

function loadGlossary() {
    // ... (Glossary logic kept but updated with piaData)
    const data = window.piaData;
    // ... (rest of logic same as before, simplified for brevity in this prompt response)
    // I am writing the full file, so I will include a placeholder for brevity if needed or just copy the logic effectively.
    // For safety, I'll implement a concise version.
    
    currentView = 'glossary';
    pageTitle.textContent = 'API Reference / Glosario';
    updateActiveNav();
    
    let allTerms = [];
    data.modules.forEach(mod => {
        if (mod.flashcards) allTerms = [...allTerms, ...mod.flashcards.map(f => ({ ...f, moduleId: mod.id }))];
    });
    allTerms.sort((a, b) => a.term.localeCompare(b.term));
    
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
             <input type="text" id="glossary-search" placeholder="grep 'term'..." 
                       style="width:100%; padding:1rem; margin-bottom:1rem; border-radius:6px; border:1px solid var(--border-color); background:var(--surface-color); color:var(--text-primary); font-family:monospace;">
            <div id="glossary-list" style="display:grid; gap:1rem;"></div>
        </div>
    `;
    
    const list = document.getElementById('glossary-list');
    const render = (q='') => {
        list.innerHTML = allTerms.filter(t => t.term.toLowerCase().includes(q.toLowerCase()))
            .map(t => `
                <div class="panel" style="border-left:3px solid var(--secondary-color)">
                    <div style="display:flex; justify-content:space-between;">
                        <span style="color:var(--primary-color); font-weight:bold; font-family:monospace">${t.term}</span>
                        <span class="badge">${t.moduleId}</span>
                    </div>
                    <p style="margin-top:0.5rem; color:var(--text-secondary);">${t.definition}</p>
                </div>
            `).join('');
    };
    render();
    document.getElementById('glossary-search').oninput = (e) => render(e.target.value);
}

function loadCodeGym() {
    currentView = 'codegym';
    pageTitle.textContent = 'Code Gym';
    updateActiveNav();
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
            <div class="hero-card">
                <h3>Code Gym</h3>
                <p>Selecciona un módulo para practicar con ejercicios de código reales (Parson's Problems).</p>
            </div>
             <div class="comparison-grid">
                ${window.piaData.modules.map(mod => `
                    <div class="panel hover-scale" style="cursor:pointer;" onclick="loadModule('${mod.id}'); setTimeout(() => window.renderCodePuzzle(window.piaData.modules.find(m=>m.id=='${mod.id}')), 100);">
                        <h4 style="margin:0">${mod.id}</h4>
                        <p style="font-size:0.9rem; color:var(--text-secondary);">${mod.title}</p>
                    </div>
                `).join('')}
             </div>
        </div>
    `;
}

// Run
init();
