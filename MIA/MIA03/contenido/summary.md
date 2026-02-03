# 📚 **Inteligencia Artificial Clásica y Sistemas Expertos – Guía Educativa**

## **1. Introducción a los Sistemas Expertos**

### **Contexto Histórico**
- La Inteligencia Artificial (IA) clásica surgió en 1956 con un enfoque más teórico que práctico.
- Se desarrolló en una época con ordenadores de capacidad limitada (ej. ENIAC, años 40-50), muy inferior a dispositivos actuales como smartwatches.
- El objetivo inicial era que las máquinas **"pensaran como humanos"**, replicando procesos cognitivos mediante algoritmos matemáticos.

### **Definición de Sistema Experto**
Un **sistema experto** es un programa informático que:
- Se basa en el conocimiento humano sobre un tema específico.
- Simula el comportamiento de un **experto humano** en ese ámbito.
- Sigue un proceso estructurado para informatizar el conocimiento.

### **Fases de Desarrollo de un Sistema Experto**
1. **Localizar al experto humano**: Incorporar personas con conocimiento profundo en el área (ej. jugadores de ajedrez para un sistema de juego).
2. **Definir reglas**: Convertir el conocimiento en reglas sencillas de causa-efecto.
3. **Informatizar**: Traducir las reglas a lenguaje de programación.
4. **Iterar**: Probar, detectar fallos, ajustar reglas y repetir hasta lograr un comportamiento equivalente al experto humano.

### **Limitaciones de la IA Clásica**
- Solo es viable para problemas con **relaciones de causalidad** (ej. ajedrez, donde cada movimiento tiene reacciones predecibles).
- No es eficaz para problemas basados en **correlaciones complejas** (relaciones proporcionales entre múltiples variables), lo que motivó el desarrollo posterior de técnicas como *machine learning*.

---

## **2. Partes de un Sistema Experto**

### **Componentes Principales**
1. **Base de conocimientos**:
   - Almacena el conocimiento estructurado de expertos.
   - Se organiza mediante reglas, redes semánticas o descripciones de objetos.

2. **Base de hechos o datos**:
   - Memoria temporal que guarda variables de entrada, intermedias y salida.
   - Registra el estado del sistema durante una consulta.

3. **Motor de inferencia**:
   - Aplica reglas a la base de conocimientos para deducir conclusiones.
   - Controla el flujo de acciones y selecciona reglas según el contexto.

4. **Interfaz sistema-usuario**:
   - Facilita la comunicación entre el usuario y el sistema.
   - Incluye módulos de explicación (muestra el proceso de razonamiento) y comunicaciones (para integración con otros sistemas).

5. **Módulo de adquisición de conocimiento**:
   - Permite actualizar y estructurar el conocimiento sin necesidad de programación avanzada.

---

## **3. Dinámica de un Sistema Experto**

### **Objetivo y Ventajas**
- **Hacer explícito el conocimiento crítico**, a diferencia de los programas tradicionales donde la lógica está incrustada en código.
- **Desarrollo rápido y mantenimiento sencillo**, ya que las reglas son intuitivas y editables por expertos no técnicos.
- Aplicaciones en **recuperación de información**, filtrado de respuestas y apoyo al usuario como "intermediario inteligente".

### **Tipos de Sistemas Expertos**
1. **Basados en reglas (RBR)**:
   - Aplican reglas predefinidas, comparan resultados y ajustan acciones según la situación.
   - Ejemplo: Un sistema de diagnóstico médico que evalúa síntomas mediante reglas heurísticas.

2. **Basados en casos (CBR)**:
   - Utilizan experiencias pasadas (casos) para resolver problemas nuevos.
   - Ejemplo: Un sistema legal que busca sentencias anteriores similares.

3. **Basados en redes bayesianas**:
   - Emplean probabilidades para modelar relaciones inciertas entre variables.
   - Ejemplo: Un sistema de predicción de fallos en equipos industriales.

---

## **4. Ejemplos y Aplicaciones Prácticas**

### **Caso Práctico: Ajedrez**
- **Fase 1**: Expertos ajedrecistas definen reglas del juego, movimientos y estrategias.
- **Fase 2**: Se traducen a reglas como *"Si el rey está en jaque, moverlo o bloquear el ataque"*.
- **Fase 3**: Programación de reglas en un motor de inferencia.
- **Fase 4**: Pruebas iterativas hasta que el sistema juegue competentemente.

### **Aplicaciones Históricas**
- **Diagnóstico médico**: Sistemas como MYCIN (1970) para identificar infecciones bacterianas.
- **Gestión industrial**: Control de procesos en tiempo real.
- **Recuperación de información**: Sistemas que razonan con datos para generar respuestas no explícitas.

---

## **5. Conclusiones Clave**
- La **IA clásica** sentó las bases teóricas para sistemas que imitan el razonamiento humano.
- Los **sistemas expertos** fueron la primera generación práctica de IA, dependientes de reglas definidas por humanos.
- Su legado perdura en aplicaciones donde el conocimiento es **explícito y causal**, aunque hoy conviven con enfoques modernos (*machine learning*).
- Para problemas complejos con correlaciones, se requieren técnicas de IA más avanzadas.

---

# 📚 Sistemas Expertos y Representación del Conocimiento - Guía

## 🔍 Tipos de Sistemas Expertos

### Sistemas Basados en Casos (CBR)
- **Concepto:** Resuelven nuevos problemas adaptando soluciones de problemas anteriores similares
- **Característica:** Razonamiento adaptable que se ajusta al contexto específico del nuevo problema

### Sistemas Basados en Redes Bayesianas
- **Concepto:** Sistemas probabilísticos que utilizan el Teorema de Bayes para estimar probabilidades
- **Funcionamiento:** Representan variables y sus dependencias mediante grafos para inferir valores desconocidos
- **Aplicaciones:** Clasificación, predicción y diagnóstico
- **Ejemplo práctico:** Sistema de riego automático que decide regar basándose en la probabilidad de lluvia

### Lógica Difusa
- **Propósito:** Permite la toma de decisiones en situaciones con incertidumbre o grados de verdad intermedios
- **Característica:** Maneja conceptos "borrosos" en lugar de valores binarios (verdadero/falso)

## 🏗️ Representación del Conocimiento

### Reglas de Producción
- **Estructura:** Condicionales SI-ENTONCES (IF-THEN)
- **Formato:** `SI premisa1 Y premisa2... ENTONCES conclusión/acción`
- **Ejemplo:** `SI el reloj funciona Y marca las 7:00 ENTONCES es hora de levantarse`
- **Mecanismo:** Cuando una regla "dispara", inserta nuevos hechos en la base de conocimientos

### Otras Estructuras de Representación
1. **Lógica Proposicional:** Separa elementos de conocimiento de los mecanismos de control
2. **Redes Semánticas:** Grafos donde nodos=conceptos y arcos=relaciones
3. **Marcos:** Estructuras de datos con atributos y valores para conceptos específicos
4. **Objetos:** Entidades independientes típicas de programación orientada a objetos
5. **Representaciones Múltiples:** Combinan enfoques declarativos y procedimentales

## ⚙️ Mecanismos de Razonamiento

### Estrategias de Inferencia
- **Encadenamiento hacia adelante:** Parte de hechos conocidos para llegar a conclusiones
- **Encadenamiento hacia atrás:** Parte de objetivos/hipótesis para buscar hechos que los apoyen
- **Encadenamiento mixto:** Combina ambos enfoques
- **Búsqueda heurística:** Utiliza reglas empíricas para guiar la búsqueda en árboles de decisión
- **Herencia:** En programación orientada a objetos, objetos hijos heredan propiedades de padres

### Sistemas de Inferencia Clásicos
- **Modus Ponens:** Si P implica Q, y P es verdadero, entonces Q es verdadero
- **Modus Tollens:** Si P implica Q, y Q es falso, entonces P es falso

## 💡 Ejemplos Clásicos

### Deep Blue (IBM, años 90)
- **Propósito:** Sistema para jugar ajedrez
- **Logro:** Venció al campeón mundial Garry Kasparov en 1997
- **Capacidad:** Cálculo de 200 millones de posiciones por segundo
- **Arquitectura:** Computadora de procesamiento paralelo masivo

### ELIZA (MIT, años 60)
- **Propósito:** Agente conversacional para interactuar en lenguaje natural
- **Funcionamiento:** Buscaba palabras clave y respondía con frases predefinidas
- **Legado:** Precursor de los chatbots modernos
- **Limitación:** Superado por sistemas actuales de procesamiento de lenguaje natural

## 🎯 Aplicaciones Prácticas
Los sistemas expertos encuentran aplicación en:
- Sistemas de diagnóstico médico
- Asistentes de configuración técnica
- Sistemas de recomendación
- Control de procesos industriales
- Análisis financiero y crediticio

Esta guía proporciona una base sólida para entender los fundamentos de los sistemas expertos, sus métodos de representación del conocimiento y sus mecanismos de razonamiento, ilustrados con ejemplos históricos significativos en el desarrollo de la inteligencia artificial.

**📖 Recursos Adicionales**:  
Para profundizar, explora conceptos como *razonamiento basado en casos*, *redes bayesianas* o *Smart Process Management*.

​
