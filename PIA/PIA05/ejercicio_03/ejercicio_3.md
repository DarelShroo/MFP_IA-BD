# Ejercicio 3: Clasificación de Vinos (Clasificación Multiclase Tabular)

## 🎯 Objetivo

Predecir el origen de un vino (cultivar 1, 2 o 3) basándose en 13 características químicas como alcohol, ácido málico, cenizas, etc.
Este ejercicio combina lo que aprendiste en el Ejercicio 1 (datos tabulares) y el Ejercicio 2 (clasificación múltiple).

## 📊 Dataset

Usaremos el **Wine Dataset**.

- **Contenido:** 178 muestras de vinos de 3 tipos diferentes.
- **Variables:** 13 características químicas.
- **Acceso:** Disponible en la librería `sklearn`.

---

## 🛠️ Guía Paso a Paso

### Paso 1: Configuración

Importa:

- `pandas` y `numpy`.
- `sklearn.datasets` (para cargar los datos).
- `sklearn.model_selection` (`train_test_split`).
- `sklearn.preprocessing` (`StandardScaler`).
- `tensorflow` y `keras`.
- **Nuevo:** `from keras.utils import to_categorical` (necesitarás esto para las etiquetas).

### Paso 2: Carga de Datos

1.  Usa `sklearn.datasets.load_wine()`. Puedes usar el argumento `return_X_y=True` para obtener directamente las variables y las etiquetas.
    - Ejemplo: `X, y = load_wine(return_X_y=True)`
2.  Explora los datos. `X` debe tener forma `(178, 13)` y `y` debe tener números 0, 1 y 2.

### Paso 3: Preprocesamiento (One-Hot Encoding)

Aquí probaremos una técnica diferente al Ejercicio 2.

1.  **Codificación de Etiquetas:** En lugar de dejar `y` como números enteros (0, 1, 2), vamos a convertirlos a formato **One-Hot**.
    - Usa `to_categorical(y)`.
    - Esto convertirá un `0` en `[1, 0, 0]`, un `1` en `[0, 1, 0]`, etc.
    - Verifica la nueva forma de `y`. Debería ser `(178, 3)`.
2.  **División:** Usa `train_test_split` para separar en entrenamiento y prueba.
3.  **Normalización:** Al igual que en el Ejercicio 1, usa `StandardScaler` para normalizar tus datos `X`. ¡Es fundamental cuando tienes medidas químicas con diferentes escalas!

### Paso 4: Arquitectura del Modelo

- **Capa de Entrada:** ¿Cuántas variables tienes? (13).
- **Capas Ocultas:**
  - Prueba con una capa de 64 neuronas, activación 'relu'.
  - Otra capa de 32 neuronas, activación 'relu'.
  - (Si quieres, añade _Dropout_ para evitar sobreajuste, pero no es estrictamente necesario para empezar).
- **Capa de Salida:**
  - Tienes 3 clases de vino. Necesitas **3 neuronas**.
  - **Activación:** 'softmax' (porque queremos probabilidades para cada una de las 3 clases).

### Paso 5: Compilación

Aquí cambia la función de pérdida porque hicimos One-Hot Encoding.

- **Función de Pérdida:** `categorical_crossentropy` (NO uses 'sparse' aquí, porque tus etiquetas ya son vectores one-hot).
- **Optimizador:** 'adam'.
- **Métricas:** 'accuracy'.

### Paso 6: Entrenamiento

- Usa `fit()`.
- Prueba con 50 o 100 épocas.
- Como el dataset es pequeño, es posible que el modelo memorice todo muy rápido. Vigila si la pérdida deja de bajar.

### Paso 7: Evaluación

1.  Evalúa con el conjunto de prueba.
2.  **Predicción:**
    - Cuando hagas `predict()`, obtendrás vectores de 3 números.
    - La suma de los 3 números será 1.0 (gracias a Softmax).
    - El número más alto indica la clase predicha.

---

## 🧠 Resumen de Aprendizaje

- **Ejercicio 1:** Clasificación Binaria -> 1 neurona salida (Sigmoid) -> Loss: `binary_crossentropy`.
- **Ejercicio 2:** Clasificación Múltiple (Etiquetas Enteras) -> N neuronas salida (Softmax) -> Loss: `sparse_categorical_crossentropy`.
- **Ejercicio 3:** Clasificación Múltiple (Etiquetas One-Hot) -> N neuronas salida (Softmax) -> Loss: `categorical_crossentropy`.
