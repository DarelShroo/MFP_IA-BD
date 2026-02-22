# Análisis de Errores: ¿Por qué la precisión no mejora?

Aquí tienes el análisis brutalmente honesto de por qué tu modelo no está aprendiendo, junto con las soluciones para dejar de dar vueltas en círculos.

## 1. El Error "Fatal" (Línea 184 y 305)

Tienes un error crítico en la arquitectura de tu red que está matando el aprendizaje desde el principio.

**Tu código actual:**

```python
Dense(10, activation='relu'),
```

**El problema:**
Estás usando `relu` en la **capa de salida**.

- **ReLU** (`Rectified Linear Unit`) convierte todo número negativo a 0 y deja pasar los positivos tal cual. El rango es `[0, infinito)`.
- Para clasificación multiclase (como CIFAR-10 que tiene 10 clases), necesitas que el modelo te diga la **probabilidad** de que la imagen pertenezca a cada una de las 10 clases (ej: 80% perro, 10% gato, etc.).
- Las probabilidades deben sumar 1.
- Al usar `relu`, tu modelo está escupiendo números arbitrarios (o ceros) que no tienen sentido como probabilidades. La función de pérdida `categorical_crossentropy` se vuelve loca intentando optimizar esto.

**La Solución:**
Cambia la activación de la última capa a **`softmax`**.

```python
Dense(10, activation='softmax'),
```

Esto normaliza las salidas para que sean una distribución de probabilidad válida (suman 1).

---

## 2. El Error Conceptual: Tratando imágenes como si fueran Excel

Estás usando una red neuronal densa (MLP) clásica para imágenes.

**Tu código:**

```python
Flatten(),
Dense(120, activation='relu'),
...
```

**El problema:**
Al hacer `Flatten()` al principio, estás aplastando la imagen de `32x32` píxeles a una tripa larga de `3072` números.

- El modelo pierde toda la noción de "espacio". No sabe qu un píxel está al lado de otro. Para él, el píxel de la esquina superior izquierda tiene la misma relación con su vecino que con el de la esquina inferior derecha.
- En imágenes, la estructura espacial es **todo**. Un ojo es un ojo porque tiene una pupila rodeada de iris rodeada de blanco, no porque sea un valor numérico aislado en la posición 450 del vector.

**La Solución (Nivel Pro):**
Para imágenes, **tienes** que usar **Redes Neuronales Convolucionales (CNN)**. Estas usan filtros para detectar bordes, texturas y formas, respetando la estructura 2D de la imagen.

Incluso si arreglas lo del `softmax` en tu modelo actual (MLP), con suerte llegarás a un 40-50% de precisión. Con una CNN básica, podrías llegar fácilmente al 70-80%.

**Ejemplo de arquitectura CNN básica:**

```python
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Input(shape=(32, 32, 3)),
    # Capas Convolucionales (Extraen características)
    Conv2D(32, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    # Ahora sí aplanamos para clasificar
    Flatten(),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax') # IMPORTANTE: Softmax aquí
])
```

---

## 3. La Falacia de la Fuerza Bruta

En el paso 6 intentaste arreglarlo poniendo:

```python
epochs=1000
```

**La realidad:**
Entrenar un modelo roto 1000 veces no lo arregla. Es como intentar abrir una puerta empujando cuando pone "Tirar"; puedes empujar con más fuerza (más epochs), pero no se va a abrir.
Con 20-50 epochs debería ser suficiente para ver si el modelo aprende. Si no sube del 20-30% en las primeras 10 epochs, algo está mal en la arquitectura o en los datos, no en la falta de tiempo.

## Resumen de Pasos para Dejar de ser "Inútil" (según tu petición 😉)

1.  **Cambia `Dense(10, activation='relu')` por `Dense(10, activation='softmax')`** INMEDIATAMENTE.
2.  (Opcional pero recomendado) Cambia la arquitectura plana por una **Convolucional (Conv2D)**.
3.  Vuelve a usar un número razonable de epochs (20 o 50).

¡Dale caña! 🚀
