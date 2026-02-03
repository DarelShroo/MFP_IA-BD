# 📚 Casos Prácticos de Aprendizaje Automático con BigML - Guía

## 🎯 **Introducción al Caso Práctico**
Eva, recién graduada en Inteligencia Artificial, busca mejorar su currículum desarrollando modelos prácticos con **BigML**, una plataforma online con versión gratuita ideal para proyectos educativos. A lo largo de esta guía trabajaremos con tres algoritmos principales aplicados a una base de datos de vinos.

## 📊 **1. Árbol de Decisión - Aprendizaje Supervisado**

### **Contexto del Problema**
- **Dataset**: "Red Wine Quality" (1,599 instancias)
- **Objetivo**: Predecir la calidad del vino (campo objetivo)
- **Algoritmo**: Árbol de Decisión (ideal cuando no se conocen correlaciones previas)

### **Proceso Paso a Paso**

#### **A. Preparación de la Plataforma**
1. **Registro en BigML**: Crear cuenta gratuita (hasta 16 MB de datos)
2. **Acceso a Datasets**: Usar datasets preexistentes de la comunidad
3. **Selección**: Buscar y "adquirir" el dataset "Red Wine Quality"

#### **B. Análisis Exploratorio**
- **Variables**: pH, sulfatos, acidez, ácido cítrico, azúcar residual, etc.
- **Tipos**: Mayoritariamente numéricas
- **Calidad**: Sin datos perdidos o erróneos
- **Herramientas**:
  - Histogramas de distribución
  - Scatterplots para relaciones entre variables
  - Posibilidad de editar/desactivar categorías irrelevantes

#### **C. Partición de Datos (CRUCIAL)**
- **80% para entrenamiento** (1,279 instancias)
- **20% para validación** (320 instancias)
- **Propósito**: Evaluar el modelo con datos no vistos durante el entrenamiento

#### **D. Entrenamiento del Modelo**
- Selección de "Model" (árbol de decisión en BigML)
- Entrenamiento rápido (segundos con este volumen de datos)
- **Visualizaciones disponibles**:
  - Representación gráfica del árbol
  - Niveles de confianza por rama
  - Distribución de predicciones
  - Importancia de variables (Split Field)

#### **E. Evaluación y Validación**
1. **Pruebas con nuevos datos**:
   - Introducción manual caso por caso
   - Por lotes usando el 20% reservado
2. **Métricas de evaluación**:
   - Comparación entre calidad real y predicha
   - Descarga de resultados en CSV
   - Análisis de confiabilidad y precisión

### **💡 Punto Clave de Aprendizaje**
La partición 80/20 permite **medir la capacidad de generalización** del modelo, evitando el sobreajuste (overfitting) y demostrando su utilidad con datos reales no vistos durante el entrenamiento.

## 🔍 **2. Clustering - Aprendizaje No Supervisado**

### **Contexto del Problema**
- **Mismo Dataset**: "Red Wine Quality" (80% de los datos)
- **Objetivo**: Descubrir agrupaciones naturales sin variable objetivo
- **Comparación**: Contrastar resultados con el modelo supervisado anterior

### **Proceso Específico**
1. **Selección del Dataset**: Usar el mismo 80% del ejercicio anterior
2. **Lanzamiento del Entrenamiento**:
   - Desde el menú **sin el rayo** (permite ajustar parámetros)
   - Configuración personalizada del algoritmo
3. **Análisis de Resultados**: Identificación de clusters naturales en los datos

### **🔍 Valor Añadido**
El clustering puede revelar **patrones ocultos** en la composición de los vinos que complementen los hallazgos del árbol de decisión, ofreciendo una visión más completa de los datos.

## 🛠️ **Herramientas y Buenas Prácticas**

### **Características de BigML**
- **Interfaz intuitiva** con visualizaciones integradas
- **Preprocesamiento**: Detección de datos faltantes/erróneos
- **Múltiples formatos**: CSV, XLS, etc.
- **Tutoriales disponibles** en "Getting Started"

### **Recomendaciones para Estudiantes**
1. **Explorar datasets comunitarios** antes de subir propios
2. **Documentar cada paso** para incluir en portafolio
3. **Probar diferentes algoritmos** con los mismos datos
4. **Analizar métricas** para entender limitaciones y fortalezas

## 📈 **Aplicación Práctica en Entrevistas**
- **Demostrar proceso completo**: Desde preparación de datos hasta evaluación
- **Explicar decisiones técnicas**: Por qué árbol de decisión vs otros algoritmos
- **Mostrar capacidad crítica**: Análisis de resultados y posibles mejoras
- **Presentar casos contrastados**: Supervisado vs no supervisado

## 🎓 **Conclusión**
Este ejercicio guiado proporciona **experiencia práctica real** con herramientas profesionales, desarrollando habilidades directamente aplicables en el mercado laboral de IA. La metodología 80/20, el uso de múltiples algoritmos y el análisis comparativo constituyen un **caso de estudio completo** que demuestra competencia técnica y pensamiento analítico.

**Ejemplo de aplicación**: En una entrevista, Eva podría mostrar cómo un mismo dataset puede abordarse desde perspectivas complementarias (supervisado y no supervisado), obteniendo insights diferentes pero igualmente valiosos para la toma de decisiones en la industria vitivinícola.

# 📚 Ejercicio Práctico de Clustering y Redes Neuronales en BigML - Guía

## 🍷 **Parte 1: Clustering con el Dataset de Vinos**

### Configuración y Entrenamiento del Modelo
- **Elección del algoritmo:** Se puede seleccionar entre **K-Means** (número de clusters definido por el usuario) o **G-Means** (el algoritmo determina el número óptimo).
- **Ejemplo práctico:** Se utiliza **K-Means con K=8** para agrupar vinos según sus características químicas.

### Interpretación del Modelo Entrenado
- **Visualización:** BigML representa los clusters como círculos de tamaño proporcional al número de instancias que contienen.
- **Centroides:** Cada cluster tiene un centroide que representa los valores promedio de sus características.
  - *Ejemplo:* En el cluster 7, el centroide muestra:
    - Acidez fija: 7.97
    - Acidez volátil: 0.57
    - 266 instancias pertenecen a este grupo.
- **Análisis por cluster:** Se puede generar un **modelo predictivo específico** para cada cluster, lo que permite identificar patrones y relaciones entre variables (ej. composición química y calidad del vino).

### Predicción y Aplicación Práctica
- **Batch Centroid:** Se utiliza para predecir a qué cluster pertenece cada vino del conjunto de prueba (20% de los datos reservados).
- **Aplicación en enología:**
  - Identificar el cluster con mayor valor en "Calidad".
  - Analizar los parámetros de ese cluster para replicar condiciones en el cultivo (ej. ajustar acidez, azúcares) con ayuda de un técnico agrícola.

---

## 🎮 **Parte 2: Redes Neuronales con Datos de League of Legends**

### Preparación de Datos en BigML
1. **Carga del dataset:**
   - Subir el archivo `Base de datos - League of Legends.csv` (9.29 MB) en **Sources**.
   - Límite de la cuenta gratuita: archivos ≤ 16 MB.
2. **Creación del dataset:**
   - BigML convierte el CSV a su formato interno.
   - **Revisión crítica:** Desactivar campos irrelevantes (ej. ID de usuario) para optimizar el entrenamiento.
3. **Definición del objetivo:** Establecer la columna **"winner"** (equipo 1 o 2) como variable a predecir.

### Entrenamiento y Análisis del Modelo
- **Algoritmo:** **DEEPNET** (red neuronal profunda de BigML).
- **Resultados gráficos:**
  - Visualización de probabilidades de victoria (azul = equipo 1, verde = equipo 2).
  - *Ejemplo:* Gráfico de "torres destruidas" muestra que el equipo 1 tiene mayor probabilidad de ganar incluso con menos torres destruidas, lo que sugiere posibles sesgos en los datos o factores no considerados.
- **Interpretación:**
  - La frontera entre colores no inicia en (0,0), indicando desequilibrios.
  - Necesidad de investigar: ¿sesgo en el juego, datos insuficientes o variables omitidas?

### Predicción y Evaluación
- **Prueba del modelo:** Introducir valores manuales para predecir al ganador (ej. resultado "1.12" indica mayor probabilidad para el equipo 1).
- **Evaluación de eficacia:**
  - **Error común:** No dividir inicialmente los datos en entrenamiento (80%) y prueba (20%).
  - **Solución:** Volver al dataset, hacer la partición y reentrenar el modelo para una evaluación válida.

---

## ✅ **Puntos Clave para el Estudio**
1. **Clustering:**
   - Centroides resumen las características de cada grupo.
   - Útil para segmentación y análisis detallado por categorías.
2. **Redes Neuronales:**
   - La calidad de los datos es crucial (limpieza, selección de variables).
   - La interpretación visual ayuda a detectar anomalías o sesgos.
3. **BigML:**
   - Interfaz intuitiva para entrenar, predecir y evaluar modelos.
   - Siempre reservar parte de los datos para validación.

---

## 🔍 **Autoevaluación y Consejos**
- **Pregunta:** ¿Es posible usar G-Means en lugar de K-Means en el ejercicio de vinos?
  **Respuesta:** Sí, G-Means determina automáticamente el número de clusters.
- **Revisión de datos:**
  - **Verdadero:** Limpiar y "aligerar" los datasets antes del entrenamiento es esencial para mejorar la eficiencia y precisión del modelo.
- **Recomendación:** En problemas específicos (ej. videojuegos), conocer el dominio mejra la interpretación de resultados.

---

**Resumen ejecutivo (≈100 palabras):**
Esta guía cubre dos ejercicios prácticos en BigML: clustering con datos de vinos y redes neuronales aplicadas a League of Legends. En el primero, se utiliza K-Means para agrupar vinos, analizando centroides y generando modelos predictivos por cluster. En el segundo, se entrena una red neuronal (DEEPNET) para predecir el ganador, destacando la importancia de la preparación de datos y la detección de sesgos. Ambos casos enfatizan la configuración, interpretación visual y aplicación práctica de los modelos, con recomendaciones para optimizar el proceso en BigML.

​
