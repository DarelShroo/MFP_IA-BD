# Ejercicio 2: Reconocimiento de Dígitos Manuscritos (Clasificación de Imágenes)

## 🎯 Objetivo

Construir una red neuronal que pueda "ver" una imagen de un número escrito a mano (0-9) y decir qué número es. Es el equivalente al "Hola Mundo" en Visión por Computadora.

## 📊 Dataset

Usaremos el dataset **MNIST** (Modified National Institute of Standards and Technology).

- **Contenido:** 70,000 imágenes en escala de grises de dígitos del 0 al 9.
- **Dimensiones:** Cada imagen es de 28x28 píxeles.
- **Acceso:** Keras ya lo incluye, así que no necesitas descargarlo manualmente.

---

## 🛠️ Guía Paso a Paso

### Paso 1: Configuración

Importa:

- `tensorflow` y `keras`.
- `matplotlib.pyplot` (opcional, pero muy útil para _ver_ las imágenes que vas a clasificar).
- `numpy`.

### Paso 2: Carga de Datos

Keras facilita mucho esto. Busca la función `keras.datasets.mnist.load_data()`.

- Esta función devuelve dos tuplas: `(x_train, y_train), (x_test, y_test)`.
- **x_train:** Las imágenes de entrenamiento (una matriz de números).
- **y_train:** Las etiquetas correctas (el número real que representa la imagen).

### Paso 3: Exploración y Preprocesamiento

1.  **Visualizar:** Usa `plt.imshow(x_train[0], cmap='gray')` para ver la primera imagen. Imprime `y_train[0]` para ver su etiqueta.
2.  **Normalización (¡Importante!):** Los píxeles van de 0 a 255. Las redes neuronales prefieren números pequeños entre 0 y 1.
    - Divide tus datos de imagen (`x_train` y `x_test`) por 255.0.
3.  **Dimensiones:** Verifica la forma (`shape`) de tus datos. Debería ser algo como `(60000, 28, 28)`.

### Paso 4: Arquitectura del Modelo

Aquí es donde entra la capa **Flatten**.

- **Modelo Sequential.**
- **Capa 1: Flatten.**
  - Input shape: `(28, 28)`.
  - Esta capa tomará la imagen cuadrada y la convertirá en una fila de 784 números (28\*28) para que la red pueda procesarla.
- **Capas Ocultas (Dense):**
  - Prueba con una capa densa de 128 neuronas, activación 'relu'.
  - Puedes añadir otra de 64 neuronas si quieres experimentar.
- **Capa de Salida (Dense):**
  - ¿Cuántos dígitos posibles hay? (0 al 9 = 10 posibilidades). Por lo tanto, necesitas **10 neuronas**.
  - **Activación:** Como es clasificación múltiple (una imagen pertenece a UNA de varias clases), usa **'softmax'**. Esto te dará la probabilidad para cada número.

### Paso 5: Compilación

- **Optimizador:** 'adam'.
- **Función de Pérdida:** Tus etiquetas (`y_train`) son números enteros (5, 0, 4...), no vectores one-hot (`[0, 0, 0, 0, 1...]`).
  - Por lo tanto, usa: `sparse_categorical_crossentropy`.
  - _Nota:_ Si hubieras transformado tus etiquetas a one-hot encoding, usarías `categorical_crossentropy`. Keras es listo y maneja esto por ti con _sparse_.
- **Métricas:** 'accuracy'.

### Paso 6: Entrenamiento

- Usa `fit()`.
- Prueba con 5 o 10 épocas (`epochs`).
- Observa cómo sube la precisión (accuracy) y baja la pérdida (loss). ¡Debería llegar a más del 95% rápidamente!

### Paso 7: Evaluación

1.  Evalúa el modelo con el conjunto de test (`x_test`, `y_test`).
2.  **Predicción:**
    - Toma una imagen del test set (ej. `x_test[:1]`).
    - Usa `model.predict()`.
    - El resultado será un array de 10 números (probabilidades). Usa `numpy.argmax()` para ver cuál es el índice con la probabilidad más alta. ¿Coincide con la etiqueta real?

---

## 💡 Reto Adicional

- Dibuja un número tú mismo en Paint (fondo negro, pincel blanco, tamaño 28x28 píxeles), guárdalo, cárgalo en Python y ve si tu red adivina qué número escribiste.
- _Pista:_ Tendrás que usar librerías de imágenes como `PIL` o `opencv` y asegurarte de que el formato coincida con el de entrenamiento.
