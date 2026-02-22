// Data loaded globally via data.js

// State
let currentModuleId = null;
let currentView = 'dashboard'; 

// DOM Elements
const contentArea = document.getElementById('content-area');
const moduleList = document.getElementById('module-list');
const pageTitle = document.getElementById('page-title');
const navBtns = document.querySelectorAll('.nav-btn');

// Initialization
function init() {
    renderSidebar();
    setupNavigation();
    updateDashboardStats();
}

function renderSidebar() {
    moduleList.innerHTML = '';
    miaData.modules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.view = 'module';
        btn.dataset.id = mod.id;
        btn.innerHTML = `<span class="icon">📦</span> ${mod.id}`;
        btn.onclick = () => loadModule(mod.id);
        moduleList.appendChild(btn);
    });
}

function setupNavigation() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = btn.dataset.view;
            if (view === 'dashboard') loadDashboard();
            if (view === 'glossary') loadGlossary();
            if (view === 'chat') loadChat();
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

// Views
function loadDashboard() {
    currentView = 'dashboard';
    currentModuleId = null;
    pageTitle.textContent = 'Dashboard';
    updateActiveNav();
    
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
            <div class="hero-card">
                <h3>Modelos de Inteligencia Artificial</h3>
                <p>Sistema de estudio avanzado. Selecciona un módulo en la barra lateral para comenzar.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">${miaData.modules.length}</span>
                    <span class="stat-label">Módulos Disponibles</span>
                </div>
                 <div class="stat-card">
                    <span class="stat-number">0%</span>
                    <span class="stat-label">Progreso Global</span>
                </div>
            </div>
        </div>
    `;
}

function loadModule(id) {
    currentView = 'module';
    currentModuleId = id;
    const module = miaData.modules.find(m => m.id === id);
    if (!module) return;

    pageTitle.textContent = module.id;
    updateActiveNav(id);

    // Template
    const template = document.getElementById('module-view-template').content.cloneNode(true);
    template.querySelector('.module-title').textContent = module.title;
    template.querySelector('.module-desc').textContent = module.description;
    
    // Bind Actions
    template.querySelector('[data-action="read"]').onclick = () => renderReadMode(module);
    template.querySelector('[data-action="flashcards"]').onclick = () => renderFlashcards(module);
    template.querySelector('[data-action="quiz"]').onclick = () => renderQuiz(module);
    template.querySelector('[data-action="blank"]').onclick = () => renderFillBlanks(module);

    contentArea.innerHTML = '';
    contentArea.appendChild(template);
    
    // Default to Read Mode
    renderReadMode(module);
}

// Sub-Views (Modes)

function renderReadMode(module) {
    const container = document.querySelector('.module-content-placeholder') || document.createElement('div');
    if (!container.className.includes('module-content-placeholder')) {
         // Clear previous content if we are switching modes
        const existing = document.getElementById('active-mode-content');
        if(existing) existing.remove();
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.id = 'active-mode-content';
    contentDiv.className = 'fade-in';
    
    module.sections.forEach(sec => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'study-section slide-in';
        sectionEl.innerHTML = `
            <h3>${sec.title}</h3>
            ${sec.text}
        `;
        contentDiv.appendChild(sectionEl);
    });

    // Replace placeholder logic
    const placeholder = document.querySelector('.module-content-placeholder');
    if(placeholder) {
        placeholder.replaceWith(contentDiv);
    } else {
         document.querySelector('.module-header').insertAdjacentElement('afterend', contentDiv);
    }
}

function renderFlashcards(module) {
    const existing = document.getElementById('active-mode-content');
    if(existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'fade-in flex-center';
    container.style.flexDirection = 'column';

    let currentIndex = 0;
    const cards = module.flashcards;

    if (!cards || cards.length === 0) {
        container.innerHTML = '<p>No hay flashcards para este módulo.</p>';
    } else {
        container.innerHTML = `
            <div class="flashcard-container">
                <div class="flashcard">
                    <div class="card-front">${cards[0].term}</div>
                    <div class="card-back">${cards[0].definition}</div>
                </div>
            </div>
            <div class="flashcard-controls">
                <button class="action-btn" id="prev-card">← Anterior</button>
                <span id="card-counter">1 / ${cards.length}</span>
                <button class="action-btn" id="next-card">Siguiente →</button>
            </div>
            <p class="text-center mt-1" style="color:var(--text-secondary)">Haz clic en la tarjeta para girarla</p>
        `;
    }

    const placeholder = document.querySelector('.module-content-placeholder');
    if(placeholder) placeholder.replaceWith(container);
    else document.querySelector('.module-header').insertAdjacentElement('afterend', container);

    // Logic
    const cardEl = container.querySelector('.flashcard');
    const frontEl = container.querySelector('.card-front');
    const backEl = container.querySelector('.card-back');
    const counterEl = container.querySelector('#card-counter');

    if(!cardEl) return;

    cardEl.addEventListener('click', () => {
        cardEl.classList.toggle('flipped');
    });

    const updateCard = () => {
        cardEl.classList.remove('flipped');
        setTimeout(() => {
            frontEl.textContent = cards[currentIndex].term;
            backEl.textContent = cards[currentIndex].definition;
            counterEl.textContent = `${currentIndex + 1} / ${cards.length}`;
        }, 200);
    };

    container.querySelector('#prev-card').onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    };

    container.querySelector('#next-card').onclick = () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCard();
        }
    };
}

function renderQuiz(module) {
    const existing = document.getElementById('active-mode-content');
    if(existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'quiz-container fade-in';

    const quizzes = module.quiz;
    
    if(!quizzes || quizzes.length === 0) {
        container.innerHTML = '<p>No hay quiz disponible.</p>';
    } else {
         quizzes.forEach((q, idx) => {
            const qEl = document.createElement('div');
            qEl.className = 'quiz-question';
            qEl.innerHTML = `
                <h3>${idx + 1}. ${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <div class="quiz-option" data-idx="${i}">${opt}</div>
                    `).join('')}
                </div>
            `;
            
            // Interaction
            const options = qEl.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.addEventListener('click', () => {
                    // Reset others
                    options.forEach(o => {
                        o.classList.remove('selected', 'correct', 'incorrect');
                        o.style.pointerEvents = 'none'; // Disable further clicks
                    });
                    
                    const selectedIdx = parseInt(opt.dataset.idx);
                    if (selectedIdx === q.answer) {
                        opt.classList.add('correct');
                    } else {
                        opt.classList.add('incorrect');
                        // Highlight correct one
                        options[q.answer].classList.add('correct');
                    }
                });
            });

            container.appendChild(qEl);
         });
    }

    const placeholder = document.querySelector('.module-content-placeholder');
    if(placeholder) placeholder.replaceWith(container);
    else document.querySelector('.module-header').insertAdjacentElement('afterend', container);
}

function renderFillBlanks(module) {
    const existing = document.getElementById('active-mode-content');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'quiz-container fade-in';

    const blanks = module.fillInBlanks;

    if (!blanks || blanks.length === 0) {
        container.innerHTML = '<p>No hay ejercicios de completar disponibles.</p>';
    } else {
        blanks.forEach((b, idx) => {
            const qEl = document.createElement('div');
            qEl.className = 'quiz-question';
            
            // Convert [blank] to input
            const parts = b.text.split('[blank]');
            let html = `<h3>${idx + 1}. `;
            parts.forEach((part, i) => {
                html += part;
                if (i < parts.length - 1) {
                    html += `<input type="text" class="blank-input" data-q="${idx}" data-a="${i}" placeholder="___" style="border:none; border-bottom: 2px solid var(--primary-color); background:transparent; color:var(--text-primary); text-align:center; width: 100px; font-size:1rem;">`;
                }
            });
            html += `</h3>`;
            html += `<p class="feedback-msg" id="feedback-${idx}" style="margin-top:10px; font-weight:bold;"></p>`;
            
            qEl.innerHTML = html;
            container.appendChild(qEl);
        });

        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn-primary mt-2';
        checkBtn.textContent = 'Verificar Respuestas';
        checkBtn.onclick = () => {
            let correctCount = 0;
            let totalBlanks = 0;
            
            blanks.forEach((b, idx) => {
                const feedbackEl = document.getElementById(`feedback-${idx}`);
                const inputs = document.querySelectorAll(`input[data-q="${idx}"]`);
                
                let allCorrectInThis = true;
                
                inputs.forEach((input, i) => {
                    totalBlanks++;
                    const userVal = input.value.trim().toLowerCase();
                    const correctVal = b.answers[i].toLowerCase();
                    
                    if (userVal === correctVal) {
                        input.style.borderColor = 'var(--accent-color)';
                        correctCount++;
                    } else {
                        input.style.borderColor = '#f85149';
                        allCorrectInThis = false;
                    }
                });

                if (allCorrectInThis) {
                    feedbackEl.textContent = "¡Correcto!";
                    feedbackEl.style.color = "var(--accent-color)";
                } else {
                    feedbackEl.textContent = `Incorrecto. Respuestas: ${b.answers.join(', ')}`;
                    feedbackEl.style.color = "#f85149";
                }
            });
        };
        
        container.appendChild(checkBtn);
    }

    const placeholder = document.querySelector('.module-content-placeholder');
    if (placeholder) placeholder.replaceWith(container);
    else document.querySelector('.module-header').insertAdjacentElement('afterend', container);
}

function loadGlossary() {
    currentView = 'glossary';
    currentModuleId = null;
    pageTitle.textContent = 'Glosario de Términos';
    updateActiveNav();
    
    // Collect all terms
    let allTerms = [];
    miaData.modules.forEach(mod => {
        if (mod.flashcards) {
            allTerms = [...allTerms, ...mod.flashcards.map(f => ({ ...f, moduleId: mod.id }))];
        }
    });
    
    // Sort alphabetically
    allTerms.sort((a, b) => a.term.localeCompare(b.term));
    
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
            <div class="search-bar-container mb-1">
                <input type="text" id="glossary-search" placeholder="Buscar término..." 
                       style="width:100%; padding:1rem; border-radius:8px; border:1px solid var(--border-color); background:var(--surface-color); color:var(--text-primary); font-size:1rem;">
            </div>
            <div id="glossary-list" class="glossary-grid">
                <!-- Terms go here -->
            </div>
        </div>
    `;

    const listEl = document.getElementById('glossary-list');
    const searchInput = document.getElementById('glossary-search');

    const renderList = (filter = '') => {
        listEl.innerHTML = '';
        const filtered = allTerms.filter(t => t.term.toLowerCase().includes(filter.toLowerCase()) || t.definition.toLowerCase().includes(filter.toLowerCase()));
        
        if (filtered.length === 0) {
            listEl.innerHTML = '<p class="text-center" style="grid-column: 1/-1; color: var(--text-secondary);">No se encontraron términos.</p>';
            return;
        }

        filtered.forEach(term => {
            const card = document.createElement('div');
            card.className = 'study-section slide-in'; // Reuse style
            card.style.marginBottom = '1rem';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <h3 style="margin:0; font-size:1.1rem; color:var(--primary-color); border:none; padding:0;">${term.term}</h3>
                    <span class="badge" style="font-size:0.7rem;">${term.moduleId}</span>
                </div>
                <p style="font-size:0.95rem; color:var(--text-secondary); margin:0;">${term.definition}</p>
            `;
            listEl.appendChild(card); 
        });
    };

    renderList();

    searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
    });
}



function updateDashboardStats() {
    // Placeholder logic
    document.getElementById('read-progress').textContent = '0%';
}

function loadChat() {
    currentView = 'chat';
    pageTitle.textContent = 'Asistente IA';
    updateActiveNav();
    contentArea.innerHTML = `
        <div class="dashboard-view fade-in">
             <div class="hero-card">
                <h3>Asistente de Estudio</h3>
                <p>Próximamente: Haz preguntas sobre el temario y obtén respuestas instantáneas.</p>
            </div>
        </div>
    `;
}

// Run
init();
