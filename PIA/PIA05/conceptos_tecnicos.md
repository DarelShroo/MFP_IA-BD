# Conceptos Técnicos de Redes Neuronales Profundas (DNN)

## 1. Arquitectura del Modelo

### Modelo (Sequential)

Es una estructura lineal de capas en Keras. Imagina una pila de bloques donde los datos entran por arriba, pasan por cada bloque (capa) uno tras otro, y salen transformados por abajo. Es la forma más sencilla de construir una red neuronal, donde cada capa tiene exactamente un tensor de entrada y uno de salida.

### Capa Densa (Dense Layer)

Es el tipo de capa más común en una red neuronal "tradicional".

- **Definición:** "Totalmente conectada". Significa que cada neurona de esta capa recibe conexiones de **todas** las neuronas de la capa anterior.
- **Funcionamiento:** Realiza una transformación lineal de los datos (multiplicación por pesos y suma de un sesgo) seguida de una función de activación no lineal.
- **Units (Unidades):** Es la cantidad de neuronas en la capa. Más neuronas permiten aprender patrones más complejos, pero requieren más cálculo.

### Capa Flatten

- **Propósito:** "Aplanar" los datos. Convierte datos multidimensionales (como una imagen que tiene alto y ancho, 2D) en un vector unidimensional (una larga fila de números).
- **¿Por qué es necesaria?** Las capas densas (Dense) solo entienden vectores planos. Si trabajas con imágenes, necesitas usar Flatten antes de pasar los datos a una capa Dense.

## 2. Funciones de Activación

Son las "fórmulas" que deciden si una neurona debe activarse o no, introduciendo "no linealidad" en el modelo. Sin ellas, una red neuronal sería solo una regresión lineal gigante.

### ReLU (Unitad Lineal Rectificada)

- **Funcionamiento:** Deja pasar los números positivos tal cual y convierte los negativos en cero.
- **Uso:** Es la función estándar para las **capas ocultas** (las capas intermedias).
- **Ventaja:** Es computacionalmente muy rápida y ayuda a que el modelo aprenda eficientemente.

### Sigmoid (Sigmoide)

- **Funcionamiento:** Aplasta cualquier número a un valor entre 0 y 1.
- **Uso:** Principalmente en la **capa de salida** para problemas de **Clasificación Binaria** (sí/no, gato/perro). El resultado se interpreta como la probabilidad de pertenecer a la clase "1".

### Softmax

- **Funcionamiento:** Convierte un vector de números en una distribución de probabilidades. La suma de todas las salidas será 1.
- **Uso:** En la **capa de salida** para problemas de **Clasificación Múltiple** (más de dos opciones, ej: clasificar dígitos del 0 al 9). Indica la probabilidad de que la entrada pertenezca a cada una de las clases.

## 3. Compilación del Modelo

### Optimizador

Es el algoritmo matemático que actualiza los pesos de la red neuronal basándose en los datos que ve y en el error que comete. Es el "motor" del aprendizaje.

- **Adam:** El optimizador más recomendado para empezar. Ajusta la velocidad de aprendizaje automáticamente y suele funcionar bien en la mayoría de los casos.
- **SGD (Descenso de Gradiente Estocástico):** El enfoque clásico, a veces más lento pero robusto.

### Función de Pérdida (Loss Function)

Es la métrica que le dice al modelo "cuán mal" lo está haciendo durante el entrenamiento. El objetivo del optimizador es reducir este número a cero.

- **Binary Crossentropy:** Para **clasificación binaria** (2 clases). Mide la distancia entre la probabilidad predicha y la etiqueta real (0 o 1).
- **Categorical Crossentropy:** Para **clasificación múltiple** cuando las etiquetas están en formato _one-hot_ (ej: [0, 1, 0]).
- **Sparse Categorical Crossentropy:** Para **clasificación múltiple** cuando las etiquetas son números enteros (ej: clase 5, clase 2).

### Learning Rate (Tasa de Aprendizaje)

Un número pequeño (ej. 0.001) que controla qué tan grandes son los ajustes que hace el optimizador en los pesos.

- **Muy alto:** El modelo aprende rápido pero puede "saltarse" la solución óptima y volverse inestable.
- **Muy bajo:** El modelo aprende muy lento y puede atascarse.

## 4. Entrenamiento

### Epoch (Época)

Una pasada completa de **todo** el conjunto de datos de entrenamiento por la red neuronal. El entrenamiento suele consistir en múltiples épocas.

### Batch Size (Tamaño del Lote)

El número de ejemplos de entrenamiento que utiliza el modelo para realizar **una** actualización de los pesos.

- El modelo no ve todos los datos a la vez; los ve en pequeños grupos (batches).
- Ejemplo: Si tienes 1000 datos y un batch_size de 100, el modelo hará 10 actualizaciones de pesos por cada época.

### Overfitting (Sobreajuste)

Un problema común donde el modelo memoriza los datos de entrenamiento en lugar de aprender los patrones generales.

- **Síntoma:** Alta precisión en los datos de entrenamiento (Training Accuracy) pero baja precisión en los datos nuevos o de prueba (Test Accuracy).

### Underfitting (Subajuste)

Cuando el modelo es demasiado simple para capturar los patrones en los datos.

- **Síntoma:** Baja precisión tanto en entrenamiento como en prueba.
