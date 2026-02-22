import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np
from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Flatten, Dense


# Es un DATASET por tanto NO TIENE HEAD 
(x_train, y_train), (x_test, y_test)  = mnist.load_data()


# Las redes neuronales prefieren numeros del 0 al 1 
# las imagenes miden 255x255, por eso se divide por 255
# NumPy aplica la operación elemento a elemento en todo el array
x_train = x_train / 255.0
x_test = x_test / 255.0

# Mostramos la estructura de datos con shape
print(x_train.shape)

# Construimos el modelo Flatten
model = Sequential([
    Flatten(input_shape=(28,28)),
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

# Compilación del modelo
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Entrenamiento
history = model.fit(
    x_train, y_train,
    epochs=10,
    validation_data=(x_test, y_test)
)

# Resultado
loss, accuracy = model.evaluate(x_test, y_test)
print(f"Pérdida en test: {loss:.4f}")
print(f"Precisión en test: {accuracy:.4f}")


# Mostrar imagen de prueba para el modelo
plt.imshow(x_test[0], cmap='gray')
plt.show()

result = model.predict(x_test[:1])
print("Resultado: ", np.argmax(result))

### Visualización de Resultados

# Precisión
plt.plot(history.history['accuracy'], label='train_accuracy')
plt.plot(history.history['val_accuracy'], label='val_accuracy')
plt.title('Precisión durante el entrenamiento')
plt.xlabel('Época')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

# Perdida
plt.plot(history.history['loss'], label='train_loss')
plt.plot(history.history['val_loss'], label='val_loss')
plt.title('Pérdida durante el entrenamiento')
plt.xlabel('Época')
plt.ylabel('Loss')
plt.legend()
plt.show()

