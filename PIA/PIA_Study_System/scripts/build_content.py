import os
import json
import re

# Configuration
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")) # Points to PIA/
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "data.js")

def parse_module(module_path, module_id):
    """
    Scans a module directory (e.g., PIA01) recursively.
    """
    module_data = {
        "id": module_id,
        "title": f"Módulo {module_id}",
        "description": f"Contenido del módulo {module_id}.",
        "sections": [],
        "flashcards": [],
        "quiz": [],
        "codingChallenges": []
    }

    # Helper to clean text
    def clean_text(text):
        text_html = text.replace('\n', '<br>')
        text_html = re.sub(r'```(\w+)?\n(.*?)```', r'<pre><code>\2</code></pre>', text_html, flags=re.DOTALL)
        return text_html

    # Recursive scan
    for root, dirs, files in os.walk(module_path):
        # Sort to Ensure order (e.g. 1. Intro, 2. Dev)
        for file in sorted(files):
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, module_path)
            
            # Markdown Content
            if file.lower().endswith(".md") or file.lower().endswith(".txt"):
                # Skip system files or instructions if needed, but for now include all
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        
                        # Use filename as title if no header found
                        title = file.replace(".md", "").replace("_", " ").title()
                        
                        # Try to find a real header
                        headers = re.findall(r'^#+\s+(.+)$', content, re.MULTILINE)
                        if headers:
                            title = headers[0]

                        module_data["sections"].append({
                            "title": f"{title} ({rel_path})",
                            "text": clean_text(content)
                        })
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

            # Python Exercises
            if file.endswith(".py") and "solucion" not in file.lower() and "build_content" not in file:
                 try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        code = f.read()
                    
                    module_data["codingChallenges"].append({
                        "id": f"{module_id}-{file.replace('.', '_')}",
                        "title": f"Ejercicio: {file}",
                        "description": f"Archivo: {rel_path}. Edita y ejecuta.",
                        "initialCode": code,
                        "hint": "Revisa el código fuente."
                    })
                 except Exception as e:
                     print(f"Error reading code {file_path}: {e}")

    # Fallback description
    if module_data["sections"]:
        module_data["description"] = f"Contiene {len(module_data['sections'])} secciones y {len(module_data['codingChallenges'])} ejercicios."

    return module_data

# Improved Content Builder with Rich HTML, Flashcards, and Lab Metadata

def parse_module(module_path, module_id):
    """
    Scans a module directory (e.g., PIA01) recursively.
    Returns a structured object with rich HTML content.
    """
    module_data = {
        "id": module_id,
        "title": f"Módulo {module_id}",
        "description": f"Contenido del módulo {module_id}.",
        "sections": [],
        "flashcards": [],
        "quiz": [],
        "codingChallenges": []
    }

    # Helper to clean text and convert to Rich HTML
    def md_to_html(text):
        # 1. Block cleanup
        html = text.strip()
        
        # 2. Bold (**text**) -> <strong>
        html = re.sub(r'\*\*(.*?)\*\*', r'<strong class="highlight">\1</strong>', html)
        
        # 3. Italic (*text*) -> <em>
        html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', html)

        # 4. Headers (#, ##, ###)
        # We handle headers in the loop below, but inline headers:
        html = re.sub(r'^### (.*)', r'<h3 class="section-subhead">\1</h3>', html, flags=re.MULTILINE)
        
        # 5. Lists (- item) -> <ul><li>
        # Simple heuristic: if line starts with -, wrap in li. (Does not handle nested lists perfectly but sufficient)
        lines = html.split('\n')
        in_list = False
        new_lines = []
        for line in lines:
            if line.strip().startswith('- '):
                if not in_list: 
                    new_lines.append('<ul class="content-list">')
                    in_list = True
                new_lines.append(f'<li>{line.strip()[2:]}</li>')
            else:
                if in_list:
                    new_lines.append('</ul>')
                    in_list = False
                new_lines.append(line)
        if in_list: new_lines.append('</ul>')
        html = '\n'.join(new_lines)

        # 6. Code Blocks (```python ... ```)
        html = re.sub(r'```(\w+)?\n(.*?)```', 
                      r'<div class="code-block"><div class="code-lang">\1</div><pre><code>\2</code></pre></div>', 
                      html, flags=re.DOTALL)
        
        # 7. Inline Code (`code`)
        html = re.sub(r'`([^`]+)`', r'<code class="inline-code">\1</code>', html)
        
        # 8. Paragraphs (double newline)
        html = re.sub(r'\n\n', '<br><br>', html)

        return f'<div class="lesson-content">{html}</div>'

    # Recursive scan
    for root, dirs, files in os.walk(module_path):
        for file in sorted(files):
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, module_path)
            
            # --- MARKDOWN CONTENT & FLASHCARDS ---
            if file.lower().endswith(".md") or file.lower().endswith(".txt"):
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    # A. Parse Flashcards (Format: "Q: Question \n A: Answer")
                    # Or generic pattern looking for "Pregunta:" / "Respuesta:"
                    fc_pattern = re.findall(r'(?:Q|P|Pregunta):\s*(.*?)\s*\n+(?:A|R|Respuesta):\s*(.*?)(?=\n(?:Q|P|Pregunta)|$)', content, re.DOTALL | re.IGNORECASE)
                    for q, a in fc_pattern:
                         module_data["flashcards"].append({
                            "question": q.strip(),
                            "answer": a.strip()
                        })

                    # B. Parse Sections (Split by ##)
                    parts = re.split(r'^##\s+(.+)$', content, flags=re.MULTILINE)
                    
                    # 0: Intro
                    if parts[0].strip():
                         # Ensure description isn't just metadata
                         desc = parts[0].strip()
                         if len(desc) > 20:
                             module_data["description"] = desc[:150] + "..."

                    # 1..N: Sections
                    for i in range(1, len(parts), 2):
                        title = parts[i].strip()
                        raw_text = parts[i+1].strip()
                        
                        # Detect if this section is ONLY flashcards or quiz
                        if "flashcard" in title.lower() or "cuestionario" in title.lower():
                            continue

                        module_data["sections"].append({
                            "title": title,
                            "text": md_to_html(raw_text)
                        })

                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

            # --- CODING CHALLENGES (.py) ---
            if file.endswith(".py") and "solucion" not in file.lower() and "build_content" not in file and "test" not in file.lower():
                 try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        code_lines = f.readlines()
                    
                    code = "".join(code_lines)
                    
                    # Extract Docstring or initial comments as Instructions
                    instructions = f"Edita y ejecuta el archivo {file}."
                    if code_lines and (code_lines[0].startswith('"""') or code_lines[0].startswith("'''")):
                        # Simple extraction of top docstring
                        instructions = code.split('"""')[1] if '"""' in code else code.split("'''")[1]
                    elif code_lines and code_lines[0].startswith("#"):
                        # Extract first block of comments
                        comments = []
                        for line in code_lines:
                            if line.startswith("#"):
                                comments.append(line.strip("# ").strip())
                            else:
                                break
                        if comments: instructions = " ".join(comments)

                    module_data["codingChallenges"].append({
                        "id": f"{module_id}-{file.replace('.', '_')}",
                        "title": file,
                        "description": instructions[:300] + ("..." if len(instructions)>300 else ""),
                        "initialCode": code,
                        "hint": "Lee los comentarios en el código para entender el objetivo."
                    })
                 except Exception as e:
                     print(f"Error reading code {file_path}: {e}")

    # Fallback / Cleanup
    if not module_data["sections"]:
        module_data["sections"].append({
            "title": "Introducción",
            "text": "<p>Este módulo contiene ejercicios prácticos. Ve al Laboratorio.</p>"
        })
    
    # If no flashcards found, add a generic one for testing
    if not module_data["flashcards"]:
         module_data["flashcards"].append({
            "question": f"¿De qué trata el módulo {module_id}?",
            "answer": "Revisa el contenido teórico y los ejercicios prácticos."
        })

    return module_data

def main():
    print(f"Scanning directory: {BASE_DIR}")
    modules = []
    
    for item in sorted(os.listdir(BASE_DIR)):
        if item.startswith("PIA") and os.path.isdir(os.path.join(BASE_DIR, item)) and "Study_System" not in item:
            print(f"Processing {item}...")
            mod = parse_module(os.path.join(BASE_DIR, item), item)
            modules.append(mod)

    js_content = f"window.piaData = {{\n    course: 'Programación de Inteligencia Artificial',\n    modules: {json.dumps(modules, indent=4, ensure_ascii=False)}\n}};"
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"Successfully generated {OUTPUT_FILE} with {len(modules)} modules.")

if __name__ == "__main__":
    main()
