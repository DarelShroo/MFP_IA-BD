import pandas as pd
from sklearn import model_selection, preprocessing
import tensorflow
from keras.models import Sequential
from keras.layers import Dense
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Cargar dataset
rare_value = ['NA', 'N/A', 'null', '', '?']
df = pd.read_csv('diabetes.csv', na_values=rare_value)

cols_with_zero = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
df[cols_with_zero] = df[cols_with_zero].replace(0, np.nan)
df[cols_with_zero] = df[cols_with_zero].fillna(df[cols_with_zero].median())

# Información básica
print(df.info())
print(df.isna().sum())
print(df.head())

# Selección de features y target
X_cols = ['Pregnancies', 'Glucose', 'BloodPressure',
          'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
X = df[X_cols]
y = df['Outcome']

# Train / Test split
X_train, X_test, y_train, y_test = model_selection.train_test_split(
    X, y,
    test_size=0.3,
    random_state=42,
    stratify=y
)

# Escalado de features
scaler = preprocessing.StandardScaler()
scaler.fit(X_train)
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)  # también escalamos el test

X_train_scaled = pd.DataFrame(X_train_scaled, columns=X_train.columns, index=X_train.index)
X_test_scaled = pd.DataFrame(X_test_scaled, columns=X_test.columns, index=X_test.index)

# Número de neuronas de entrada
input_neurons = X_train.shape[1]

# Modelo secuencial
model = Sequential([
    Dense(10, activation='relu', input_shape=(input_neurons,)),
    Dense(8, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Configuración de aprendizaje
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Entrenamiento
history = model.fit(
    X_train_scaled, y_train,
    epochs=100,
    batch_size=10,
    validation_data=(X_test_scaled, y_test)
)

# Evaluación en test
loss, accuracy = model.evaluate(X_test_scaled, y_test)
print(f"Pérdida en test: {loss:.4f}")
print(f"Precisión en test: {accuracy:.4f}")

# =======================
# Visualizaciones
# =======================

plt.figure(figsize=(10, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Mapa de correlación entre variables')
plt.show()

plt.plot(history.history['accuracy'], label='Train Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.title('Precisión durante el entrenamiento')
plt.show()

plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
plt.title('Pérdida durante el entrenamiento')
plt.show()

y_pred = model.predict(X_test_scaled)
y_pred_classes = (y_pred > 0.5).astype(int)

plt.figure(figsize=(10,4))
plt.plot(y_test.values[:50], label='Real', marker='o')
plt.plot(y_pred_classes[:50], label='Predicción', marker='x')
plt.title('Primeras 50 predicciones vs reales')
plt.xlabel('Índice')
plt.ylabel('Outcome')
plt.legend()
plt.show()
