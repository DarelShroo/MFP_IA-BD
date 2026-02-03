import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# -----------------------------
# Datos
# -----------------------------

# Puntos verdes (clase A)
greens = [
    (1, 7), (1, 12), 
    (2, 5), (2, 9), (2, 11),
    (3, 6), (3, 10),
    (3.5, 8)
]

# Puntos rojos (clase B)
reds = [
    (1.5, 9), 
    (3, 2), 
    (3.75, 3),
    (4, 2),
    (5, 3),
    (5.5, 4),
    (6.1, 1),
    (7, 2)
]

# Nuevos puntos
new_points = [(2.5, 7), (5.5, 4.5)]

# -----------------------------
# Preparar datos para KNN
# -----------------------------
X = np.array(greens + reds)
y = np.array(["A"] * len(greens) + ["B"] * len(reds))

new_X = np.array(new_points)

K = 15
knn = KNeighborsClassifier(n_neighbors=K)
knn.fit(X, y)

preds = knn.predict(new_X)
dist, idxs = knn.kneighbors(new_X)

print("Predicciones:", preds)

# -----------------------------
# Gráfica
# -----------------------------
plt.figure(figsize=(10,6))

# puntos verdes
xg, yg = zip(*greens)
plt.scatter(xg, yg, marker="s", s=120, color="green", label="Clase A")

# puntos rojos
xr, yr = zip(*reds)
plt.scatter(xr, yr, marker="D", s=120, color="red", label="Clase B")

# nuevos puntos (triángulos blancos)
xn, yn = zip(*new_points)
plt.scatter(xn, yn, marker="v", s=150, facecolors="white", edgecolors="black",
            linewidth=1.5, label="Nuevos puntos")

# -----------------------------
# Líneas hacia sus vecinos
# -----------------------------
for i, point in enumerate(new_X):
    for neighbor_idx in idxs[i]:
        neighbor = X[neighbor_idx]
        plt.plot(
            [point[0], neighbor[0]],
            [point[1], neighbor[1]],
            "--", color="gray", linewidth=1
        )

# -----------------------------
# Estilo
# -----------------------------
plt.grid(True, linestyle=":", linewidth=0.5)

plt.xticks(range(1, 9))
plt.yticks(range(0, 16, 2))

plt.xlim(0.5, 8.2)
plt.ylim(0, 15)

plt.xlabel("Eje X")
plt.ylabel("Eje Y")
plt.legend()

plt.title(f"Clasificación KNN visual – K = {K}")

plt.show()
