/**
 * Code Gym / Code Puzzles Logic for PIA System
 * Implements "Parson's Problems" - Drag and Drop or sorting lines of code.
 */

window.renderCodePuzzle = function(module) {
    const existing = document.getElementById('active-mode-content');
    
    // Check if module has puzzles
    const puzzles = module.codePuzzles || [];
    
    const container = document.createElement('div');
    container.id = 'active-mode-content';
    container.className = 'fade-in';
    
    if (puzzles.length === 0) {
        container.innerHTML = `
            <div class="panel" style="text-align:center; padding: 2rem;">
                <p style="color:var(--text-secondary); font-family:monospace;">// No code puzzles available yet for this module.</p>
                <p>Check back later for refactoring exercises.</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="puzzle-header" style="margin-bottom:1.5rem">
                <h3 style="color:var(--primary-color);">🧩 Code Puzzle: Ordena el Algoritmo</h3>
                <p style="color:var(--text-secondary);">Arrastra y suelta (o haz clic para mover) las líneas de código para reconstruir la lógica correcta.</p>
            </div>
        `;
        
        puzzles.forEach((puzzle, idx) => {
            const puzzleEl = document.createElement('div');
            puzzleEl.className = 'panel';
            puzzleEl.style.marginBottom = '2rem';
            
            // Scramble lines
            const correctLines = puzzle.solution; // Array of strings
            // Create objects with ID to track correctness
            let scrambled = correctLines.map((line, i) => ({ id: i, text: line }));
            
            // Valid shuffle (Fisher-Yates) that ensures it's actually different
            for (let i = scrambled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
            }

            const puzzleId = `puzzle-${idx}`;
            
            puzzleEl.innerHTML = `
                <h4 style="font-family:'JetBrains Mono'; margin-bottom:1rem;">Exercise ${idx+1}: ${puzzle.description}</h4>
                <div id="${puzzleId}-area" class="code-sort-area" style="background:#0d1117; padding:1rem; border-radius:6px; border:1px solid var(--border-color);">
                    <!-- Lines injected here -->
                </div>
                <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
                    <button class="action-btn" id="${puzzleId}-check">Run Test >></button>
                    <span id="${puzzleId}-feedback" style="font-family:monospace; font-weight:bold;"></span>
                </div>
            `;
            
            container.appendChild(puzzleEl);
            
            // Render scrambled lines
            const sortArea = puzzleEl.querySelector(`#${puzzleId}-area`);
            
            const renderLines = () => {
                sortArea.innerHTML = '';
                scrambled.forEach((item, index) => {
                    const lineDiv = document.createElement('div');
                    lineDiv.className = 'code-line';
                    lineDiv.textContent = item.text;
                    lineDiv.style.cssText = `
                        background: #1f2937; 
                        padding: 0.5rem 1rem; 
                        margin-bottom: 0.5rem; 
                        border-left: 2px solid var(--secondary-color);
                        font-family: 'JetBrains Mono', monospace;
                        cursor: pointer;
                        user-select: none;
                        transition: transform 0.2s;
                    `;
                    lineDiv.onmouseover = () => lineDiv.style.background = '#374151';
                    lineDiv.onmouseout = () => lineDiv.style.background = '#1f2937';
                    
                    // Simple click-to-swap-up mechanism for simplicity without Drag&Drop lib
                    // If complex DnD is needed, we'd need more code. 
                    // Let's implement "Select one, Select another, Swap".
                    
                    lineDiv.addEventListener('click', () => handleSwap(index));
                    if (selectedIndex === index) {
                        lineDiv.style.borderLeft = '4px solid var(--accent-color)';
                        lineDiv.style.background = '#374151';
                        lineDiv.style.fontWeight = 'bold';
                    }
                    
                    sortArea.appendChild(lineDiv);
                });
            };
            
            let selectedIndex = null;
            
            const handleSwap = (clickedIndex) => {
                if (selectedIndex === null) {
                    selectedIndex = clickedIndex;
                } else {
                    // Swap
                    [scrambled[selectedIndex], scrambled[clickedIndex]] = [scrambled[clickedIndex], scrambled[selectedIndex]];
                    selectedIndex = null;
                }
                renderLines();
                // Clear feedback
                puzzleEl.querySelector(`#${puzzleId}-feedback`).textContent = '';
            };
            
            renderLines();
            
            // Check Logic
            puzzleEl.querySelector(`#${puzzleId}-check`).onclick = () => {
                const currentOrder = scrambled.map(s => s.id);
                const isCorrect = currentOrder.every((val, i) => val === i); // Should match 0,1,2,3...
                const feedback = puzzleEl.querySelector(`#${puzzleId}-feedback`);
                
                if (isCorrect) {
                    feedback.textContent = "Compilación Exitosa (Success) ✅";
                    feedback.style.color = "var(--primary-color)";
                    sortArea.style.borderColor = "var(--primary-color)";
                } else {
                    feedback.textContent = "Error de Sintaxis (Try Again) ❌";
                    feedback.style.color = "#f85149";
                    sortArea.style.borderColor = "#f85149";
                }
            };
        });
    }
    
    if(existing) existing.replaceWith(container);
};
