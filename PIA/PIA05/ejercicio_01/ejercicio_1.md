# Ejercicio 1: Predicción de Diabetes (Clasificación Binaria)

## 🎯 Objetivo

Desarrollar un modelo de Deep Learning capaz de predecir si un paciente tiene diabetes o no, basándose en medidas diagnósticas ciertas.

## 📊 Dataset

Usaremos el famoso dataset **Pima Indians Diabetes**.

- **Origen:** National Institute of Diabetes and Digestive and Kidney Diseases.
- **Variables de entrada (X):** 8 variables (Embarazos, Glucosa, Presión sanguínea, Grosor de piel, Insulina, BMI, Función de pedigrí de diabetes, Edad).
- **Variable de salida (y):** 0 (No tiene diabetes) o 1 (Tiene diabetes).
- **Descarga:** Puedes obtenerlo en formato CSV desde [Kaggle](https://www.kaggle.com/uciml/pima-indians-diabetes-database) o usar la URL directa cruda si prefieres cargarla directamente desde pandas (busca "pima indians diabetes csv raw github").

---

## 🛠️ Guía Paso a Paso

### Paso 1: Configuración

Crea un nuevo notebook o script de Python. Importa las librerías necesarias:

- `pandas` (para manejar los datos).
- `sklearn.model_selection` (específicamente `train_test_split`).
- `sklearn.preprocessing` (específicamente `StandardScaler` para normalizar).
- `tensorflow` y `keras`.

### Paso 2: Carga de Datos

1.  Usa `pandas` para leer el archivo CSV.
2.  Muestra las primeras filas (`head()`) para asegurarte de que se cargó correctamente.
3.  Verifica si hay valores nulos o tipos de datos extraños.

### Paso 3: Preprocesamiento (¡Crucial!)

1.  **Separar variables:** Divide tu tabla en dos:
    - **X:** Todas las columnas menos la de resultado ('Outcome').
    - **y:** Solo la columna de resultado ('Outcome').
2.  **División Entrenamiento/Prueba:** Usa `train_test_split` para separar el 70% u 80% de los datos para entrenar y el resto para probar.
3.  **Normalización:** Las redes neuronales funcionan mucho mejor si los datos son pequeños y están en la misma escala. Usa `StandardScaler` para ajustar tus datos **X** (entrenamiento y prueba).
    - _Nota:_ Ajusta el scaler (`fit`) solo con los datos de entrenamiento, y luego transforma (`transform`) ambos conjuntos.

### Paso 4: Arquitectura del Modelo

Diseña tu red neuronal usando `Sequential`.

- **Capa de Entrada:** Debe coincidir con el número de variables que tienes (8 columnas).
- **Capas Ocultas:** Experimenta. Una buena estructura inicial podría ser:
  - Primera capa densa con 12 neuronas y activación 'relu'.
  - Segunda capa densa con 8 neuronas y activación 'relu'.
- **Capa de Salida:** Como es clasificación binaria (Sí/No), **necesitas 1 sola neurona**.
  - ¿Qué función de activación debes usar aquí para obtener una probabilidad entre 0 y 1? (Revisa los apuntes).

### Paso 5: Compilación

Configura cómo aprenderá el modelo.

- **Función de Pérdida (Loss):** ¿Cuál es la adecuada para clasificación binaria? (Pista: `binary_crossentropy`).
- **Optimizador:** Usa 'adam'.
- **Métricas:** Queremos ver la precisión ('accuracy').

### Paso 6: Entrenamiento

Entrena tu modelo usando la función `fit()`.

- Pásale los datos de entrenamiento (X_train, y_train).
- Define el número de `epochs` (ej. 150) y `batch_size` (ej. 10).
- (Opcional) Usa `validation_data=(X_test, y_test)` para ver cómo evoluciona la precisión en el test set en tiempo real.

### Paso 7: Evaluación y Predicción

1.  Usa `evaluate()` con tus datos de prueba para obtener la precisión final.
2.  Intenta hacer una predicción con datos inventados o con una fila del test set para ver qué probabilidad arroja el modelo.

---

## 💡 Preguntas para reflexionar

- ¿Qué pasa si aumentas mucho el número de neuronas? ¿Mejora el resultado o empeora?
- ¿Qué pasa si no normalizas los datos en el Paso 3?
