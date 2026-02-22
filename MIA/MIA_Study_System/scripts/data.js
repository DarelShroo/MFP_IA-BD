window.miaData = {
    modules: [
        {
            id: "MIA01",
            title: "Módulo 1: Fundamentos y Caracterización de la IA",
            description: "Análisis profundo de la naturaleza, historia, impacto y desafíos éticos de la Inteligencia Artificial.",
            sections: [
                {
                    title: "1. Naturaleza y Definición de la IA",
                    text: `
                        <div class="concept-box">
                            <h4>Definiciones Clave</h4>
                            <p><strong>Común:</strong> Habilidad para aprender y resolver problemas en una máquina.</p>
                            <p><strong>Técnica (Consensuada):</strong> Inteligencia llevada a cabo por máquinas. Un <em>agente flexible</em> que percibe su entorno y ejecuta acciones que maximizan sus posibilidades de éxito en algún objetivo.</p>
                        </div>
                        
                        <p>La IA simula tres procesos cognitivos fundamentales:</p>
                        <ol>
                            <li><strong>Aprendizaje:</strong> Adquisición de información y reglas para su uso.</li>
                            <li><strong>Razonamiento:</strong> Uso de reglas para llegar a conclusiones aproximadas o definitivas.</li>
                            <li><strong>Autocorrección:</strong> Capacidad de ajustarse y mejorar el desempeño.</li>
                        </ol>

                        <div class="insight">
                            <strong>Caso Práctico: Centro Logístico</strong><br>
                            Imagina un centro donde la IA clasifica paquetes, gestiona vehículos autónomos y detecta anomalías. Aunque parece "inteligente", solo sigue reglas complejas y patrones estadísticos diseñados por humanos. No "sabe" qué es un paquete, solo maximiza la eficiencia de su ruta.
                        </div>

                        <h4>Características Diferenciales: Humano vs Máquina</h4>
                        <table class="comparison-table">
                            <tr>
                                <th>Aspecto</th>
                                <th>Inteligencia Artificial</th>
                                <th>Inteligencia Humana</th>
                            </tr>
                            <tr>
                                <li><strong>Procesamiento</strong></li>
                                <td>Serial/Paralelo masivo, basado en silicio. Ultra-rápido en cálculos.</td>
                                <td>Red neuronal biológica, paralela, electroquímica. Lenta en cálculo, rápida en asociación.</td>
                            </tr>
                            <tr>
                                <li><strong>Aprendizaje</strong></li>
                                <td>Requiere miles/millones de ejemplos (Data Hungry).</td>
                                <td>"One-shot learning". Puede aprender de un solo ejemplo por analogía y contexto.</td>
                            </tr>
                            <tr>
                                <li><strong>Naturaleza</strong></li>
                                <td>Estadística, matemática, sin conciencia ni qualia.</td>
                                <td>Semántica, emocional, consciente, con sentido común e intuición.</td>
                            </tr>
                        </table>
                        <ul>
                            <li><strong>Ventaja Computacional:</strong> La IA gana en velocidad, escalabilidad y aburrimiento (no se cansa).</li>
                            <li><strong>Diseño Humano:</strong> La IA es una herramienta; su propósito y ética vienen del humano.</li>
                        </ul>
                    `
                },
                {
                    title: "2. Evolución: De la IA Estrecha a la IA Generativa",
                    text: `
                        <h4>Paradigmas de la IA</h4>
                        <ul>
                            <li><strong>IA Estrecha (Weak AI):</strong> Especialista. Juega ajedrez, reconoce caras o traduce, pero no puede hacer otra cosa. Es la IA que existe hoy. <br><em>Ejemplos: Siri, Filtros de Spam, AlphaGo.</em></li>
                            <li><strong>IA General (AGI):</strong> El objetivo teórico. Una mente versátil capaz de aprender cualquier tarea intelectual humana. <br><em>Ejemplos Ficción: C-3PO, Data de Star Trek.</em></li>
                        </ul>

                        <h4>El Cambio de Paradigma (Post-2020): Modelos Fundacionales</h4>
                        <p>Modelos como GPT-4 introducen la <strong>IA Estrecha Avanzada</strong>, difuminando las líneas:</p>
                        <ul>
                            <li><strong>Multidominio:</strong> Un solo modelo puede programar, escribir poesía y analizar imágenes.</li>
                            <li><strong>Habilidades Emergentes:</strong> Capacidades no programadas explícitamente que surgen de la complejidad del modelo (ej: razonamiento lógico básico, traducción sin entrenamiento específico).</li>
                            <li><strong>Multimodalidad:</strong> Procesamiento nativo de texto, audio, imagen y video.</li>
                        </ul>

                        <div class="warning-box">
                            <strong>Limitaciones Críticas:</strong>
                            <ul>
                                <li><strong>Alucinaciones:</strong> Generación de datos falsos pero convincentes. Los modelos predicen palabras, no verifican hechos.</li>
                                <li><strong>Frontera Irregular (Jagged Frontier):</strong> Un modelo puede resolver ecuaciones diferenciales complejas pero fallar al contar las letras de una palabra simple.</li>
                                <li><strong>Caja Negra:</strong> Difícil saber <em>por qué</em> tomaron una decisión.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    title: "3. Ciclo de Vida: Entrenamiento vs Inferencia",
                    text: `
                        <p>Es vital distinguir estas dos fases para entender los costos y el funcionamiento:</p>
                        
                        <table class="comparison-table">
                            <tr>
                                <th>Fase</th>
                                <th>Entrenamiento (Training)</th>
                                <th>Inferencia (Inference)</th>
                            </tr>
                            <tr>
                                <td><strong>Actividad</strong></td>
                                <td>El modelo "aprende" analizando terabytes de datos. Ajusta sus millones de parámetros.</td>
                                <td>El modelo "aplica" lo aprendido a datos nuevos para generar una respuesta.</td>
                            </tr>
                            <tr>
                                <td><strong>Costo</strong></td>
                                <td>Masivo (Millones de dólares, meses de cómputo en superordenadores).</td>
                                <td>Bajo por consulta, pero escala con el número de usuarios.</td>
                            </tr>
                            <tr>
                                <td><strong>Estado</strong></td>
                                <td>Dinámico (los pesos cambian).</td>
                                <td>Estático (generalmente el modelo no aprende de la interacción en tiempo real).</td>
                            </tr>
                        </table>
                        <p><em>Nota: Cuando usas ChatGPT, estás en fase de inferencia. El modelo no "aprende" de tu charla para su conocimiento base (aunque la sesión tenga contexto temporal).</em></p>
                    `
                },
                {
                    title: "4. Historia de la IA: Una Línea de Tiempo Detallada",
                    text: `
                        <ul class="timeline">
                            <li><strong>1943 (Pre-IA):</strong> McCulloch y Pitts crean el primer modelo matemático de una neurona artificial.</li>
                            <li><strong>1950:</strong> Alan Turing publica <em>"Computing Machinery and Intelligence"</em> y propone el <strong>Test de Turing</strong>.</li>
                            <li><strong>1956 (Nacimiento):</strong> Conferencia de Dartmouth. John McCarthy acuña el término "Inteligencia Artificial". Minsky y otros asisten. Optimismo desbordado.</li>
                            <li><strong>1958:</strong> Creación de LISP, lenguaje pionero en IA.</li>
                            <li><strong>1966:</strong> ELIZA, el primer chatbot (simulaba un psicoterapeuta rogeriano).</li>
                            <li><strong>Años 70 (Primer Invierno de la IA):</strong> Recorte masivo de fondos al no cumplirse las promesas irrealistas ("una máquina hará todo lo que un hombre en 20 años").</li>
                            <li><strong>Años 80 (Sistemas Expertos):</strong> Resurgimiento con aplicaciones comerciales específicas. Ej: R1 (ahorró millones a DEC), MYCIN (diagnóstico).</li>
                            <li><strong>Años 90 (Segundo Invierno y Renacer):</strong> Caída de los motores de LISP. Deep Blue (1997) vence a Kasparov (fuerza bruta).</li>
                            <li><strong>2011 (Hito Cognitivo):</strong> <strong>Watson</strong> (IBM) gana en Jeopardy! demostrando procesamiento de lenguaje natural complejo.</li>
                            <li><strong>2012 (Revolución Deep Learning):</strong> AlexNet domina ImageNet. Geoffrey Hinton y el equipo demuestran la superioridad de las redes neuronales profundas.</li>
                            <li><strong>2014-2016:</strong>
                                <ul>
                                    <li><strong>GANs (2014):</strong> Ian Goodfellow inventa las redes antagónicas para generar contenido.</li>
                                    <li><strong>AlphaGo (2016):</strong> Vence a Lee Sedol. El "Movimiento 37" muestra creatividad/intuición no humana.</li>
                                </ul>
                            </li>
                            <li><strong>2017:</strong> Paper "Attention is All You Need" (Google). Nacen los <strong>Transformers</strong>, base de todos los LLMs modernos.</li>
                            <li><strong>2020-2022 (Era Generativa):</strong>
                                <ul>
                                    <li><strong>GPT-3:</strong> Demuestra aprendizaje "few-shot".</li>
                                    <li><strong>AlphaFold (2020):</strong> Resuelve el plegamiento de proteínas (Hito científico masivo).</li>
                                    <li><strong>2022 (Big Bang):</strong> DALL-E 2, Stable Diffusion, ChatGPT. La IA se hace mainstream.</li>
                                </ul>
                            </li>
                             <li><strong>2023:</strong> GPT-4 aprueba exámenes humanos (Bar Exam, Olimpiadas Biología) con notas altas.</li>
                        </ul>
                    `
                },
                {
                    title: "5. Ética y Desafíos Sociales",
                    text: `
                        <div class="comparison-grid">
                            <div class="panel">
                                <h4>Riesgos Técnicos y Éticos</h4>
                                <ul>
                                    <li><strong>Sesgos (Bias):</strong> Los modelos replican prejuicios de los datos (ej: racismo en reconocimiento facial, sexismo en contratación).</li>
                                    <li><strong>Opacidad (Black Box):</strong> Imposibilidad de auditar por qué una red neuronal profunda tomó una decisión vital (ej: denegar un crédito).</li>
                                    <li><strong>Prompt Injection:</strong> Vulnerabilidad donde se manipula al modelo para saltarse sus restricciones de seguridad.</li>
                                </ul>
                            </div>
                            <div class="panel">
                                <h4>Impacto Socioeconómico</h4>
                                <ul>
                                    <li><strong>Transformación Laboral:</strong> Automatización de tareas cognitivas y creativas. Desplazamiento de roles (traducción, redacción básica, programación junior).</li>
                                    <li><strong>Brecha Digital:</strong> Riesgo de aumentar la desigualdad entre países/empresas con acceso a IA y los que no.</li>
                                    <li><strong>Desinformación:</strong> Coste cero para generar Fake News infinitas y Deepfakes realistas, amenazando procesos democráticos.</li>
                                    <li><strong>Concentración de Poder:</strong> Pocas empresas controlan la infraestructura crítica (chips, nubes, modelos).</li>
                                </ul>
                            </div>
                        </div>
                        <p><strong>Regulación:</strong> La <em>EU AI Act</em> (2024) es pionera mundial, clasificando la IA por niveles de riesgo (Inaceptable, Alto, Limitado, Mínimo) para proteger derechos fundamentales.</p>
                    `
                }
            ],
            flashcards: [
                { term: "Inteligencia Artificial", definition: "Agente flexible que percibe su entorno y maximiza el éxito en un objetivo dado." },
                { term: "Test de Turing", definition: "Prueba propuesta en 1950 para determinar si una máquina puede exhibir comportamiento inteligente indistinguible de un humano." },
                { term: "IA Estrecha (Weak AI)", definition: "Sistemas diseñados para una tarea específica (ej: ajedrez) sin capacidad de transferir conocimiento a otros dominios." },
                { term: "AGI (IA General)", definition: "Inteligencia teórica comparable a la humana, capaz de aprender y resolver cualquier problema intelectual." },
                { term: "Entrenamiento", definition: "Fase intensiva de cómputo donde el modelo ajusta sus parámetros analizando datos etiquetados." },
                { term: "Inferencia", definition: "Fase de uso del modelo entrenado para hacer predicciones sobre nuevos datos. Costo menor que el entrenamiento." },
                { term: "Alucinación", definition: "Fenómeno donde un LLM genera información falsa o inventada presentada con total confianza." },
                { term: "Invierno de la IA", definition: "Periodo histórico de reducción drástica de inversión e interés debido a expectativas no cumplidas." },
                { term: "Deep Blue", definition: "IA de IBM que venció a Kasparov (1997) usando fuerza bruta de cálculo y evaluación de posiciones." },
                { term: "AlphaGo", definition: "IA de DeepMind que venció en Go (2016) usando aprendizaje por refuerzo y movimientos 'intuitivos' (Movimiento 37)." },
                { term: "Modelos Fundacionales", definition: "Modelos masivos (ej: GPT) entrenados en data diversa, adaptables a múltiples tareas (multimodales, multidominio)." },
                { term: "Sesgo Algorítmico", definition: "Error sistemático que privilegia a un grupo sobre otro, derivado de datos de entrenamiento no representativos o prejuicios históricos." },
                { term: "Caja Negra", definition: "Sistema (como Deep Learning) cuyos procesos internos de decisión son opacos e ininterpretables para humanos." },
                { term: "GANs", definition: "Redes Generativas Antagónicas (2014): Dos redes (generador vs discriminador) compiten para crear datos sintéticos realistas." },
                { term: "Prompt Injection", definition: "Ataque de seguridad que usa instrucciones maliciosas en el texto de entrada para manipular la salida del modelo." },
                { term: "Transformer", definition: "Arquitectura de red neuronal (2017) basada en mecanismos de atención, fundamental para todos los LLMs modernos." },
                { term: "AlphaFold", definition: "IA de DeepMind que resolvió el problema del plegamiento de proteínas, acelerando el descubrimiento de fármacos." },
                { term: "EU AI Act", definition: "Legislación pionera de la UE (2024) que regula la IA basándose en niveles de riesgo para los derechos fundamentales." }
            ],
            quiz: [
                {
                    question: "¿Qué define mejor a la 'Inferencia' en el ciclo de vida de un modelo?",
                    options: [
                        "El proceso de aprender de nuevos datos en tiempo real para mejorar.",
                        "El uso de un modelo ya entrenado para generar predicciones con datos nuevos.",
                        "La fase de corrección manual de errores por humanos.",
                        "El ajuste de los hiperparámetros del modelo durante el diseño."
                    ],
                    answer: 1
                },
                {
                    question: "¿Cuál fue el logro principal distintivo de AlphaGo en 2016?",
                    options: [
                        "Pasar el Test de Turing engañando a jueces humanos.",
                        "Vencer al campeón de Ajedrez usando fuerza bruta de cálculo.",
                        "Vencer al campeón de Go mostrando creatividad e 'intuición' (Movimiento 37).",
                        "Resolver el plegamiento de proteínas en segundos."
                    ],
                    answer: 2
                },
                {
                    question: "¿Qué es una 'Alucinación' en el contexto de la IA Generativa?",
                    options: [
                        "Un error de compilación del código fuente.",
                        "Una respuesta creativa y poética intencional.",
                        "Información falsa generada convincentemente por el modelo.",
                        "Cuando el modelo se niega a responder por motivos éticos."
                    ],
                    answer: 2
                },
                {
                    question: "¿Qué caracteriza al 'Invierno de la IA'?",
                    options: [
                        "Un periodo necesario de enfriamiento de los servidores.",
                        "La época dorada de los Sistemas Expertos en los 80.",
                        "Una reducción drástica de fondos y descrédito por expectativas no cumplidas.",
                        "El desarrollo de la IA en países nórdicos."
                    ],
                    answer: 2
                },
                {
                    question: "¿Qué diferencia clave tiene GPT-4 frente a Deep Blue?",
                    options: [
                        "GPT-4 es un sistema experto y Deep Blue una red neuronal.",
                        "Deep Blue era multidominio y GPT-4 es especialista.",
                        "GPT-4 es un modelo fundacional multidominio y Deep Blue era específico (ajedrez).",
                        "No hay diferencia, ambos son ejemplos de AGI."
                    ],
                    answer: 2
                },
                {
                    question: "¿Qué arquitectura de 2017 permitió el auge de los LLMs actuales?",
                    options: [
                        "Redes Convolucionales (CNN)",
                        "Transformers (Mecanismo de Atención)",
                        "Máquinas de Soporte Vectorial (SVM)",
                        "Sistemas Basados en Reglas"
                    ],
                    answer: 1
                }
            ],
            fillInBlanks: [
                {
                    text: "La IA [blank] es aquella diseñada para tareas específicas, mientras que la IA [blank] es un objetivo teórico con capacidades humanas completas.",
                    answers: ["Estrecha", "General"]
                },
                {
                    text: "El proceso de [blank] implica ajustar los parámetros del modelo con datos, mientras que la [blank] es el uso del modelo para predicciones.",
                    answers: ["Entrenamiento", "Inferencia"]
                },
                {
                    text: "Alan [blank] propuso en 1950 una prueba para determinar si una máquina puede exhibir comportamiento inteligente.",
                    answers: ["Turing"]
                },
                 {
                    text: "Los modelos de lenguaje pueden sufrir de [blank], generando información falsa con gran confianza.",
                    answers: ["alucinaciones"]
                },
                {
                    text: "El problema de la [blank] [blank] se refiere a no saber por qué una red neuronal toma una decisión específica.",
                    answers: ["Caja", "Negra"]
                }
            ]
        },
        {
            id: "MIA02",
            title: "Módulo 2: Clasificaciones y Tipologías",
            description: "Arquitecturas mentales: De la IA Simbólica a la Computacional y niveles de cognición.",
            sections: [
                {
                    title: "1. Las Dos Grandes Escuelas de Pensamiento",
                    text: `
                        <p>La historia de la IA se divide en dos enfoques fundamentales sobre cómo lograr la inteligencia:</p>
                        <table class="comparison-table">
                            <tr>
                                <th>Característica</th>
                                <th>IA Simbólica (Convencional)</th>
                                <th>IA Computacional (Subsimbólica)</th>
                            </tr>
                            <tr>
                                <td><strong>Enfoque</strong></td>
                                <td>Top-Down (Deductivo). Basado en reglas y lógica.</td>
                                <td>Bottom-Up (Inductivo). Basado en datos y aprendizaje.</td>
                            </tr>
                            <tr>
                                <td><strong>Filosofía</strong></td>
                                <td>"Si codificamos las reglas del pensamiento, tendremos inteligencia."</td>
                                <td>"Si simulamos la estructura del cerebro (neuronas), la inteligencia emergerá."</td>
                            </tr>
                            <tr>
                                <td><strong>Representación</strong></td>
                                <td>Símbolos explícitos, árboles de decisión, reglas IF-THEN.</td>
                                <td>Vectores numéricos, pesos en redes neuronales, matrices.</td>
                            </tr>
                            <tr>
                                <td><strong>Pros</strong></td>
                                <td>Explicable (sabemos por qué decide), precisa en dominios cerrados.</td>
                                <td>Robusta, maneja incertidumbre, generaliza a nuevos datos (visión, voz).</td>
                            </tr>
                            <tr>
                                <td><strong>Contras</strong></td>
                                <td>Frágil (falla si la regla no existe), no aprende sola.</td>
                                <td>Opaca (Caja Negra), requiere datos masivos.</td>
                            </tr>
                            <tr>
                                <td><strong>Ejemplos</strong></td>
                                <td>Deep Blue, Sistemas Expertos (MYCIN).</td>
                                <td>ChatGPT, AlphaGo, Reconocimiento Facial.</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. Clasificación Evolutiva de Arend Hintze",
                    text: `
                        <p>Hintze propone una escala basada en la complejidad cognitiva, desde lo puramente mecánico hasta la conciencia:</p>
                        <ol class="steps-list">
                            <li>
                                <strong>Máquinas Reactivas (Nivel 1):</strong>
                                <p>No tienen memoria ni pasado. Solo ven el "ahora". Su respuesta ante el mismo estímulo es siempre idéntica. No pueden aprender de su experiencia.<br><em>Ejemplo: Deep Blue (analiza el tablero actual, no recuerda la partida anterior).</em></p>
                            </li>
                            <li>
                                <strong>Memoria Limitada (Nivel 2):</strong>
                                <p>Pueden considerar información reciente transitoria para tomar decisiones actuales. La mayoría de la IA moderna está aquí.<br><em>Ejemplos: Coches autónomos (rastrean velocidad de otros coches hace 5 segundos), Chatbots (tienen ventana de contexto de la charla actual).</em></p>
                            </li>
                            <li>
                                <strong>Teoría de la Mente (Nivel 3 - Futuro):</strong>
                                <p><strong>Aún no existe.</strong> Serían máquinas capaces de entender que las otras entidades (humanos o IAs) tienen pensamientos, emociones e intenciones propias que afectan su conducta. Es clave para la interacción social real ("él está triste, debo ser amable").</p>
                            </li>
                            <li>
                                <strong>Autoconciencia (Nivel 4 - Futuro Lejano):</strong>
                                <p>La máquina tiene conciencia de su propia existencia y estados internos. "Sé que estoy pensando". Es el paso final hacia la verdadera conciencia artificial.</p>
                            </li>
                        </ol>
                    `
                },
                {
                    title: "3. Enfoque de Russell y Norvig",
                    text: `
                        <p>Clasifican las IAs en cuatro cuadrantes basándose en dos ejes: <strong>Proceso (Pensar vs Actuar)</strong> y <strong>Estándar (Humano vs Racional)</strong>.</p>
                        <ul>
                            <li><strong>Sistemas que piensan como humanos:</strong> Enfoque de la Ciencia Cognitiva. Tratan de emular el funcionamiento biológico de la mente (redes neuronales originales).</li>
                            <li><strong>Sistemas que actúan como humanos:</strong> Enfoque del Test de Turing. Lo importante es el resultado externo, la simulación del comportamiento, sin importar cómo lo logre por dentro.</li>
                            <li><strong>Sistemas que piensan racionalmente:</strong> Lógica pura (Aristóteles). Buscan seguir las "Leyes del pensamiento" irrefutables. Difícil de aplicar en el mundo real incierto.</li>
                            <li><strong>Sistemas que actúan racionalmente:</strong> <strong>Agentes Racionales</strong>. El enfoque estándar moderno. Tratan de maximizar el resultado esperado u objetivo, sin importar si el proceso interno se parece al humano o es pura estadística.</li>
                        </ul>
                    `
                },
                {
                   title: "4. Aplicaciones Prácticas y Smart Process",
                   text: `
                        <h4>Smart Process Management</h4>
                        <p>Automatización de decisiones complejas en empresas. No es solo un robot en una línea de montaje, sino software que decide, por ejemplo, rutas logísticas o aprovisionamiento en tiempo real.</p>
                        <h4>Ejercicio de Clasificación Diaria</h4>
                        <ul>
                            <li><strong>Teclado Predictivo:</strong> IA Débil, Computacional (Probabilística).</li>
                            <li><strong>Recomendaciones Netflix:</strong> IA Débil, Computacional (Filtrado colaborativo).</li>
                            <li><strong>GPS (Waze):</strong> IA Débil, Racional (Búsqueda de camino óptimo A*).</li>
                        </ul>
                   `
                },
                {
                    title: "5. Ejercicio Reflexivo: Clasificación en el Mundo Real",
                    text: `
                        <p>Analiza estas herramientas cotidianas según su tipología:</p>
                        <table class="comparison-table">
                            <tr>
                                <th>Herramienta</th>
                                <th>Clasificación</th>
                                <th>Justificación</th>
                            </tr>
                            <tr>
                                <td><strong>Teclado Predictivo</strong></td>
                                <td>IA Débil / Computacional</td>
                                <td>Usa probabilidad (Cadenas de Markov/Redes) para predecir la siguiente palabra. No entiende el significado.</td>
                            </tr>
                            <tr>
                                <td><strong>Recomendador Netflix</strong></td>
                                <td>IA Débil / Computacional</td>
                                <td>Filtrado colaborativo. "A usuarios como tú les gustó X". Matriz de preferencias.</td>
                            </tr>
                            <tr>
                                <td><strong>GPS (Waze/Maps)</strong></td>
                                <td>IA Débil / Racional</td>
                                <td>Algoritmos de búsqueda de caminos (A*). Maximiza una función de utilidad (tiempo/distancia).</td>
                            </tr>
                        </table>
                        <div class="insight">
                            <strong>Para Reflexionar:</strong> ¿Alguna de estas herramientas podría "rebelarse"? No, porque son <strong>reactivas</strong> o de <strong>memoria limitada</strong> con objetivos fijos programados. No tienen agencia propia.
                        </div>
                   `
                }
            ],
            flashcards: [
                { term: "IA Simbólica", definition: "Enfoque clásico basado en reglas lógicas explícitas y manipulación de símbolos." },
                { term: "IA Computacional", definition: "Enfoque moderno basado en el aprendizaje a partir de datos (Machine Learning/Redes Neuronales)." },
                { term: "Máquinas Reactivas", definition: "Nivel 1 de Hintze: IA sin memoria que solo responde al estímulo presente." },
                { term: "Memoria Limitada", definition: "Nivel 2 de Hintze: IA que usa datos recientes para decisiones inmediatas (ej: coches autónomos)." },
                { term: "Teoría de la Mente", definition: "Nivel 3 de Hintze (Teórico): Capacidad de entender que otros tienen pensamientos y emociones." },
                { term: "Agente Racional", definition: "Sistema que actúa para maximizar su medida de rendimiento u objetivo, enfoque moderno de la IA." },
                { term: "Enfoque Inductivo", definition: "Aprender reglas generales a partir de datos específicos (propio de Machine Learning/Computacional)." },
                { term: "Enfoque Deductivo", definition: "Aplicar reglas generales a casos específicos (propio de Sistemas Expertos/Simbólica)." },
                { term: "Top-Down", definition: "Estrategia de IA Simbólica: se da el conocimiento y las reglas desde arriba." },
                { term: "Bottom-Up", definition: "Estrategia de IA Computacional: el conocimiento emerge desde abajo (los datos)." }
            ],
            quiz: [
                {
                    question: "¿Qué tipo de IA es un coche autónomo que rastrea la velocidad de otros vehículos?",
                    options: [
                        "Máquina Reactiva",
                        "Memoria Limitada",
                        "Teoría de la Mente",
                        "Autoconciencia"
                    ],
                    answer: 1
                },
                {
                    question: "¿Cuál es la filosofía principal de la IA Simbólica?",
                    options: [
                        "La inteligencia emerge de conectar neuronas simples.",
                        "La inteligencia es la manipulación de símbolos físicos basada en reglas explícitas.",
                        "La inteligencia solo se logra con computación cuántica.",
                        "La inteligencia requiere un cuerpo biológico."
                    ],
                    answer: 1
                },
                {
                    question: "Según Russell y Norvig, ¿qué hace un 'Agente Racional'?",
                    options: [
                        "Piensa exactamente como un humano con emociones.",
                        "Actúa para maximizar el resultado esperado u objetivo.",
                        "Siempre usa lógica perfecta infalible.",
                        "Intenta engañar al usuario deliberadamente."
                    ],
                    answer: 1
                },
                {
                    question: "¿Qué limitación tienen las Máquinas Reactivas?",
                    options: [
                        "Son muy lentas en procesamiento.",
                        "No pueden usar experiencias pasadas para informar decisiones actuales.",
                        "Tienen demasiada memoria y se saturan.",
                        "Requieren conciencia para funcionar."
                    ],
                    answer: 1
                },
                {
                    question: "El teclado predictivo de tu móvil es un ejemplo de:",
                    options: [
                        "IA Fuerte",
                        "IA Débil Computacional",
                        "Sistema Experto Simbólico",
                        "Teoría de la Mente"
                    ],
                    answer: 1
                }
            ],
            fillInBlanks: [
                {
                    text: "La IA [blank] se basa en reglas y lógica (deductiva), mientras que la IA [blank] aprende patrones de los datos (inductiva).",
                    answers: ["Simbólica", "Computacional"]
                },
                {
                    text: "Según Hintze, una máquina que entiende emociones e intenciones ajenas tendría Teoría de la [blank].",
                    answers: ["Mente"]
                },
                {
                    text: "Deep Blue es un ejemplo de Máquina [blank], ya que no aprende de sus partidas pasadas.",
                    answers: ["Reactiva"]
                }
            ]
        },
        {
            id: "MIA03",
            title: "Módulo 3: Sistemas Expertos e IA Clásica",
            description: "La primera era dorada: capturando el conocimiento humano en reglas explícitas.",
            sections: [
                {
                    title: "1. ¿Qué es un Sistema Experto (SE)?",
                    text: `
                        <p>Es un software que emula el proceso de toma de decisiones de un experto humano en un dominio muy específico (Medicina, Finanzas, Geología).</p>
                        <p><strong>Objetivo:</strong> Transferir el conocimiento de una persona (costosa, escasa, mortal) a un sistema (replicable, eterno, siempre disponible).</p>
                        <ul class="pros-cons">
                            <li><strong>Ventajas:</strong> Conocimiento permanente, disponibilidad 24/7, bajo costo de replicación, explicabilidad (pueden decir por qué tomaron una decisión).</li>
                            <li><strong>Desventajas:</strong> Fragilidad (fallan fuera de su dominio), falta de sentido común, alto costo mantenimiento de reglas ("Bottleneck" de adquisición de conocimiento).</li>
                        </ul>
                        <div class="comparison-grid">
                             <div class="panel">
                                <h4>Sistemas Expertos vs Software Tradicional</h4>
                                <p><strong>Tradicional:</strong> Algoritmo = Lógica + Datos mezclados. Si cambia el negocio, reescribes el código.</p>
                                <p><strong>Sistema Experto:</strong> Separa totalmente la Lógica (Motor) del Conocimiento (Base). Puedes cambiar las reglas sin tocar el motor.</p>
                             </div>
                        </div>
                    `
                },
                {
                    title: "2. Arquitectura de un SE",
                    text: `
                        <div class="architecture-diagram">
                            <ol>
                                <li>
                                    <strong>Base de Conocimientos (Knowledge Base):</strong>
                                    Es el corazón. Contiene las reglas (IF-THEN) y hechos del dominio. Es específica del problema (ej: reglas de medicina).
                                </li>
                                <li>
                                    <strong>Base de Hechos (Memoria de Trabajo):</strong>
                                    Almacena los datos del caso actual (ej: "Paciente tiene fiebre") y conclusiones parciales.
                                </li>
                                <li>
                                    <strong>Motor de Inferencia (Inference Engine):</strong>
                                    El cerebro lógico. Es el algoritmo que decide qué reglas aplicar y en qué orden. Es independiente del conocimiento (puedes cambiar la base médica por una financiera y usar el mismo motor).
                                </li>
                                <li>
                                    <strong>Interfaz de Usuario / Módulo de Explicación:</strong>
                                    Permite al usuario introducir datos y preguntar "¿Por qué me preguntas esto?" o "¿Cómo llegaste a esa conclusión?".
                                </li>
                                <li>
                                    <strong>Módulo de Adquisición:</strong>
                                    Herramientas para que el experto humano introduzca o edite reglas.
                                </li>
                            </ol>
                        </div>
                    `
                },
                {
                    title: "3. Representación del Conocimiento",
                    text: `
                        <p>¿Cómo guardamos lo que sabe el experto?</p>
                        <ul>
                            <li><strong>Reglas de Producción:</strong> Estructura <code>SI [premisa] ENTONCES [acción]</code>. La forma más común.</li>
                            <li><strong>Redes Semánticas:</strong> Grafos donde los nodos son conceptos y los arcos son relaciones (ej: "Pajarito" --ES_UN--> "Ave"). Útil para herencia de propiedades.</li>
                            <li><strong>Marcos (Frames):</strong> Estructuras de datos complejas (como objetos/clases) con atributos y valores por defecto.</li>
                            <li><strong>Lógica Proposicional/Predicados:</strong> Formalismos matemáticos estrictos para representar hechos y relaciones.</li>
                        </ul>
                    `
                },
                {
                    title: "4. Estrategias de Inferencia",
                    text: `
                        <p>¿Cómo razona el motor?</p>
                        <ul>
                            <li>
                                <strong>Encadenamiento hacia Adelante (Forward Chaining) - "Data Driven":</strong>
                                <br>Empiezas con los datos (Síntomas A, B, C) y disparas reglas hasta llegar a una conclusión.
                                <br><em>Útil para: Monitorización, diagnóstico en tiempo real donde entran datos constantemente.</em>
                            </li>
                            <li>
                                <strong>Encadenamiento hacia Atrás (Backward Chaining) - "Goal Driven":</strong>
                                <br>Empiezas con una Hipótesis (¿Tiene Gripe?) y buscas hacia atrás hechos que la confirmen.
                                <br><em>Útil para: Diagnóstico médico estructurado (para no hacer pruebas innecesarias). MYCIN usaba esto.</em>
                            </li>
                        </ul>
                        <p><strong>Lógica:</strong> Usan reglas como <em>Modus Ponens</em> (Si A implica B, y A es verdad -> B es verdad).</p>
                    `
                },
                {
                    title: "5. Tipos de Sistemas Especializados",
                    text: `
                        <ul>
                            <li><strong>Basados en Reglas (RBR):</strong> Lógica determinista. IF X THEN Y.</li>
                            <li><strong>Basados en Casos (CBR):</strong> "Razonamiento analógico". Busca un problema pasado similar en una base de datos y adapta la solución. (Ej: Jurisprudencia, Help Desk).</li>
                            <li><strong>Redes Bayesianas:</strong> Manejan <strong>Incertidumbre</strong>. Usan probabilidad (Teorema de Bayes) en lugar de certezas absolutas. (Ej: Probabilidad de enfermedad dado síntoma X).</li>
                            <li><strong>Lógica Difusa (Fuzzy Logic):</strong> Maneja conceptos vagos ("Alto", "Caliente", "Rápido") en lugar de binarios (0/1). Fundamental en control industrial (aires acondicionados, frenos ABS, lavadoras).</li>
                        </ul>
                    `
                },
                { 
                    title: "6. Hitos Históricos",
                    text: `
                        <ul>
                            <li><strong>1965 DENDRAL:</strong> Química orgánica. Identificaba estructuras moleculares. Considerado el primer SE exitoso.</li>
                            <li><strong>1970s MYCIN:</strong> Diagnóstico de infecciones bacterianas. Introdujo los "Factores de Certeza" (probabilidad). Diagnosticaba mejor que médicos junior, pero nunca se usó legalmente por responsabilidad.</li>
                            <li><strong>PROSPECTOR:</strong> Geología. Encontró un depósito de molibdeno real multimillonario.</li>
                        </ul>
                    `
                }
            ],
            flashcards: [
                { term: "Sistema Experto", definition: "Software que imita el juicio de un experto humano en un campo específico usando reglas explícitas." },
                { term: "Motor de Inferencia", definition: "Componente que aplica las reglas de la base de conocimiento a los hechos para deducir conclusiones." },
                { term: "Base de Conocimientos", definition: "Repositorio de reglas y hechos específicos del dominio en un SE. Es independiente del motor." },
                { term: "Encadenamiento hacia Adelante", definition: "Inferencia que parte de los datos disponibles para llegar a una conclusión (Data-driven)." },
                { term: "Encadenamiento hacia Atrás", definition: "Inferencia que parte de una hipótesis y busca evidencias que la confirmen (Goal-driven)." },
                { term: "Razonamiento Basado en Casos (CBR)", definition: "Resolver problemas nuevos adaptando soluciones de problemas pasados similares (analogía)." },
                { term: "Lógica Difusa (Fuzzy Logic)", definition: "Lógica que permite grados de verdad intermedios, manejando conceptos vagos como 'poco' o 'mucho'." },
                { term: "Red Semántica", definition: "Representación del conocimiento mediante grafos de conceptos (nodos) y relaciones (arcos)." },
                { term: "MYCIN", definition: "Famoso SE médico de los 70 para diagnosticar infecciones sanguíneas. Usaba encadenamiento hacia atrás." },
                { term: "Fragilidad (Brittleness)", definition: "La tendencia de los SE a fallar totalmente o dar respuestas absurdas cuando el problema se aleja ligeramente de sus reglas." },
                { term: "Modus Ponens", definition: "Regla lógica básica: Si P implica Q, y P es verdadero, entonces Q es verdadero." }
            ],
            quiz: [
                {
                    question: "¿Qué componente del Sistema Experto contiene las reglas IF-THEN específicas del dominio?",
                    options: [
                        "Motor de Inferencia",
                        "Base de Conocimientos",
                        "Memoria de Trabajo",
                        "Interfaz de Usuario"
                    ],
                    answer: 1
                },
                {
                    question: "Si un médico empieza preguntando '¿Tiene fiebre?' para verificar su hipótesis de gripe, ¿qué inferencia usa?",
                    options: [
                        "Encadenamiento hacia adelante",
                        "Encadenamiento hacia atrás",
                        "Red Neuronal",
                        "Algoritmo Genético"
                    ],
                    answer: 1
                },
                {
                    question: "¿Cuál es una desventaja crítica de los Sistemas Expertos clásicos?",
                    options: [
                        "Son incapaces de explicar sus decisiones.",
                        "Son 'frágiles' y carecen de sentido común general fuera de su dominio.",
                        "Son imposibles de programar.",
                        "Siempre dan respuestas aleatorias."
                    ],
                    answer: 1
                },
                {
                    question: "¿Qué tipo de sistema usarías para controlar un aire acondicionado basándote en 'hace un poco de calor'?",
                    options: [
                        "Sistema Basado en Casos",
                        "Lógica Difusa",
                        "Red Bayesiana",
                        "Encadenamiento hacia atrás"
                    ],
                    answer: 1
                },
                {
                    question: "¿Qué sistema histórico encontró un depósito de molibdeno?",
                    options: [
                        "MYCIN",
                        "ELIZA",
                        "PROSPECTOR",
                        "DENDRAL"
                    ],
                    answer: 2
                }
            ],
            fillInBlanks: [
                {
                    text: "El [blank] de Inferencia es el algoritmo que decide qué reglas aplicar.",
                    answers: ["Motor"]
                },
                {
                    text: "El encadenamiento hacia [blank] comienza con una meta o hipótesis y busca pruebas.",
                    answers: ["atrás"]
                },
                {
                    text: "La [blank] Difusa permite trabajar con valores que no son totalmente verdaderos o falsos.",
                    answers: ["Lógica"]
                },
                {
                    text: "DENDRAL fue un sistema experto pionero en el campo de la [blank].",
                    answers: ["Química"]
                }
            ]
        }
    ]
};
