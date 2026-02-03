# 📚 Introducción a Big Data - Guía Completa

## 🎯 **Objetivo General**
Comprender el fenómeno Big Data, sus características fundamentales, infraestructura necesaria y aplicaciones prácticas para resolver problemas de procesamiento de datos a gran escala.

---

## 📖 **Caso Práctico Inicial: FL Logistics**
**Situación:** Empresa de logística con 15 años de experiencia que enfrenta problemas de crecimiento debido a limitaciones tecnológicas.

### **Problemas Identificados:**
1. **Crecimiento exponencial:** De 1 a 10 almacenes en poco tiempo
2. **Arquitectura insuficiente:**
   - Servidor único inicial → saturación
   - Servidores independientes por almacén → complejidad de gestión
   - Servidor central actual → saturado con 10 almacenes
3. **Limitación tecnológica:** Infraestructura tradicional impone límite al crecimiento empresarial

### **Solución Necesaria:** Sistemas Big Data

---

## 🔍 **¿Por qué aparece Big Data?**

### **Problema Base**
Las metodologías y tecnologías Big Data surgen como respuesta a la necesidad de tratar **cantidades de datos tan grandes que desbordan los sistemas convencionales monomáquina**.

### **Ejemplo Práctico:**
- Empresas tradicionales (como FL Logistics) manejan datos de:
  - Proveedores
  - Productos
  - Rutas
  - Empleados
  - Transacciones
- Los sistemas tradicionales no escalan adecuadamente

### **Fuentes de Información Recomendadas:**
- Wikipedia en español: "Macrodatos"
- Wikipedia en inglés: "Big data" (más completa)
- **Importante:** La literatura especializada es mayoritariamente en inglés

---

## 📊 **Las 5 Vs del Big Data**

### **1. Volumen**
**Definición:** Gran cantidad de bytes de información que componen los datos.

#### **Escalas de Medida:**
| Unidad | Equivalencia | Notación Científica |
|--------|-------------|---------------------|
| Bit | Unidad mínima (0/1) | - |
| Byte (B) | 8 bits | - |
| Kilobyte (kB) | 1,000 bytes | 10³ bytes |
| Megabyte (MB) | 1,000 kB | 10⁶ bytes |
| Gigabyte (GB) | 1,000 MB | 10⁹ bytes |
| Terabyte (TB) | 1,000 GB | 10¹² bytes |
| Petabyte (PB) | 1,000 TB | 10¹⁵ bytes |
| Exabyte (EB) | 1,000 PB | 10¹⁸ bytes |
| Zettabyte (ZB) | 1,000 EB | 10²¹ bytes |
| Yottabyte (YB) | 1,000 ZB | 10²⁴ bytes |

**Nota importante:** Existe confusión entre base 10 (decimal) y base 2 (binaria). Ejemplo: 1 MB puede significar 1,000,000 bytes (10⁶) o 1,048,576 bytes (2²⁰).

#### **Datos Globales:**
- 2013: 4.4 ZB de datos en el mundo
- 2025 (proyección): 163 ZB
- **Big Data actual:** Trabaja con volúmenes de PB a EB

#### **Fuentes de Datos:**
1. Usuarios/clientes de instituciones
2. Transacciones comerciales
3. Sensores (temperatura, humedad)
4. Redes sociales
5. Historiales médicos
6. Geolocalización (GPS)
7. Logs de acceso web
8. Internet de las Cosas (IoT)
9. Genómica
10. Meteorología
11. Cámaras y micrófonos
12. RFID
13. Sector energético e industrial
14. Datos abiertos (Open Data)

### **2. Velocidad**
**Definición:** Rapidez con que se generan y deben procesarse los datos.

#### **Ejemplos por Minuto:**
- 350,000 tweets
- 300 horas de vídeo en YouTube
- 171 millones de correos electrónicos
- 330 GB de datos de sensores de aviones comerciales

**Problema:** No solo almacenar, sino procesar e integrar datos en tiempo real.

**Ejemplo de cálculo:** Almacenar peso diario de 7,870 millones de personas (4 bytes cada uno) durante un año = 11.5 TB

### **3. Variedad**
**Definición:** Diferentes formatos y estructuras de los datos.

#### **Tipos de Datos:**

**A. Datos Estructurados (≈20% del total)**
- Características:
  - Estructura bien definida
  - Almacenados en tablas (filas/columnas)
  - Formato documentado
  - Fácil de buscar, ordenar y consultar
- Ejemplo: Bases de datos relacionales

**B. Datos No Estructurados (≈80% del total)**
- Características:
  - Sin esquema definido
  - Difíciles de categorizar automáticamente
- Ejemplos:
  - Vídeos
  - Imágenes
  - Audios
  - Textos de redes sociales
- Métodos de procesamiento:
  - Bases de datos NoSQL
  - Data Lakes
  - Web Scraping
  - APIs

**C. Datos Semiestructurados**
- Características:
  - Estructura flexible pero definida
  - No relacionales
  - Almacenados en ficheros de texto
- Formatos comunes:
  - CSV (valores separados por comas)
  - XML (lenguaje de marcado extensible)
  - JSON (notación de objetos JavaScript)

**D. Metadatos**
- Datos sobre los datos
- Ejemplos:
  - Información estructural
  - Fuente y autor
  - Fecha de creación
  - Resolución (imágenes/vídeos)
  - Duración (vídeos)
  - Frecuencia de muestreo (audio)
  - Tipo de compresión

### **4. Veracidad**
**Definición:** Calidad y confiabilidad de los datos.

### **5. Valor**
**Definición:** Utilidad que pueden proporcionar los datos procesados.

---

## 🎓 **Conceptos Clave para Recordar**

### **Puntos Esenciales:**
1. **Big Data ≠ solo analítica:** Es un ecosistema completo de captura, almacenamiento, gestión y análisis
2. **No hay umbral oficial:** No existe cantidad específica que defina "Big Data"
3. **Evolución de las Vs:** De 3 a 5, y ahora hasta 7 Vs (añadiendo Viabilidad y Visualización)
4. **Importancia del inglés:** Para profundizar, es necesario consultar fuentes en inglés

### **Aplicación Práctica:**
Para empresas como FL Logistics, implementar soluciones Big Data significa:
- Escalabilidad horizontal (añadir más máquinas)
- Procesamiento distribuido
- Capacidad de crecimiento ilimitado
- Integración de múltiples fuentes de datos

---

## 💡 **Conclusión**
Big Data representa un cambio de paradigma en el manejo de información, donde los sistemas tradicionales monomáquina son insuficientes. Las **5 Vs** (Volumen, Velocidad, Variedad, Veracidad y Valor) describen completamente los desafíos y oportunidades de este campo. La correcta implementación de tecnologías Big Data permite a empresas como FL Logistics superar limitaciones de crecimiento y transformar grandes volúmenes de datos en ventajas competitivas reales.

​
# Resumen Detallado: Fundamentos de Big Data, Clusters y Almacenamiento

## 1. Calidad y Valor de los Datos

### 1.1. Veracidad (Relación Señal/Ruido)
- **Concepto:** La veracidad se refiere a la fidelidad de los datos a la realidad y está relacionada con la **relación señal/ruido**.
- **Señal:** Datos que pueden convertirse en información útil.
- **Ruido:** Datos que no contienen información usable o están corruptos.
- **Ejemplo:** Los datos generados automáticamente (transacciones) suelen tener menos ruido que los generados por personas (posts en blogs).
- **Autoevaluación clave:** El ruido en datos se refiere a que **parte de los datos no contienen información usable o de la que se pueda obtener valor**.

### 1.2. Valor de los Datos
- **Definición:** Utilidad de los datos para una organización o persona.
- **Factores que influyen:**
    1. **Veracidad:** A mayor fidelidad, mayor valor potencial.
    2. **Actualidad (Timeliness):** El valor decae con el tiempo. Ejemplo: En bolsa, un dato de hace 1 segundo es más valioso que uno de hace 1 hora.
    3. **Completitud:** Los datos deben ser completos, no solo correctos.
    4. **Interpretación correcta:** El contexto y uso adecuado son vitales. Ejemplo: Un dato de temperatura bajo tierra no sirve para un estudio de temperatura ambiente.
- **Reflexión:** ¿Usar siempre datos antiguos? **Depende del caso.** Para análisis de tendencias (análisis descriptivo) son útiles. Para modelos predictivos de comportamientos cambiantes (como gustos de usuarios), pueden ser menos relevantes.

## 2. Beneficios y Aportes de Big Data
- **Operaciones habilitadas:** Captura, integración, almacenamiento distribuido, procesamiento paralelo, minería/ciencia de datos, creación de modelos predictivos y visualizaciones.
- **Beneficios clave:**
    - Optimización de operaciones empresariales.
    - Toma de decisiones inteligente basada en evidencia.
    - Identificación de nuevos mercados y predicciones.
    - Detección de fraude.
    - Descubrimientos científicos y avances médicos (detección de enfermedades, creación de fármacos).

## 3. La Pirámide DIKW: Del Dato al Valor
Proceso de transformación sucesiva para extraer valor:
1.  **Eventos:** Sucesos en el mundo real (ej: una transacción, una medición).
2.  **Datos (Data):** Representación almacenable de un evento (ej: "Llueve 4 mm").
3.  **Información (Information):** Datos organizados y con contexto (ej: "La temperatura bajó y la humedad aumentó a las 10:00 en Almería").
4.  **Conocimiento (Knowledge):** Información dotada de significado, permitiendo crear modelos predictivos (ej: "Caída de temperatura + aumento de humedad + baja presión = lluvia").
5.  **Sabiduría (Wisdom):** Comprensión para aplicar el conocimiento correctamente (ej: Anticipar cuándo y por qué lloverá).
6.  **Valor:** Beneficio obtenido al tomar acciones basadas en la sabiduría, superior al resultado que se obtendría sin los datos.
- **Nota:** La **Minería de Datos** (rama de la IA) y la **Ciencia de Datos** (minería en entornos Big Data) son las disciplinas que finalmente extraen el valor.

## 4. Clusters de Computadoras
- **Definición:** Conjunto de computadoras (nodos/servidores) conectadas en red para trabajar como una unidad en la resolución de cargas de trabajo.
- **Evolución:** Antes se usaban computadoras especializadas caras. Ahora se usa **hardware común (commodity hardware)**, potenciado por la Ley de Moore.
- **Ventajas clave:**
    1.  **Alto Rendimiento:** Paralelización de tareas en múltiples nodos para resolver problemas complejos rápidamente.
    2.  **Alta Disponibilidad:** Monitorización y tolerancia a fallos. Si un nodo falla, otro puede suplirlo o se rearranca.
    3.  **Equilibrado de Carga (Load Balancing):** Distribución inteligente del trabajo entre nodos para evitar cuellos de botella, basándose en el tamaño del trabajo y la carga de cada nodo.
    4.  **Escalabilidad:** Capacidad de aumentar la potencia añadiendo más nodos.
        - **Escalado Horizontal (Scale-out):** Añadir más nodos al cluster. Es el método escalable y propio de Big Data.
        - **Escalado Vertical (Scale-up/Scale-in):** Mejorar el hardware de una sola máquina. Tiene límites físicos y no proporciona verdadera escalabilidad.

## 5. Conceptos de Almacenamiento de Datos (Introducción)
- Se presentan conceptos clave para entender el almacenamiento en Big Data, contrastando con enfoques tradicionales:
    - **Base de Datos Relacional:** La más usada, pero **no escalable** para volúmenes Big Data.
    - **Dataset:** Cualquier conjunto de datos (puede ser enorme).
    - **Almacén de Datos (Data Warehouse):** Sistema especializado para análisis y reporting.
    - **Lago de Datos (Data Lake):** Repositorio que almacena grandes volúmenes de datos en bruto y en su formato nativo.
    - **ACID:** Propiedades (Atomicidad, Consistencia, Aislamiento, Durabilidad) que garantizan la fiabilidad de las transacciones en bases de datos.
    - **Teorema CAP:** Teorema fundamental en sistemas distribuidos que establece que es imposible para un sistema de almacenamiento de datos garantizar simultáneamente más de dos de estas tres propiedades: Consistencia, Disponibilidad y Tolerancia a particiones.

**Propósito General:** Este texto proporciona una base fundamental para comprender los principios de la gestión y el valor de los datos en entornos de gran escala (Big Data), explicando los desafíos de calidad de los datos, la arquitectura de procesamiento (clusters) y los conceptos básicos de almacenamiento distribuido que permiten manejar y analizar volúmenes masivos de información.

​
# 📚 Propiedades de Bases de Datos Distribuidas - Guía

## 1. Principios Fundamentales de Diseño

### 1.1. Principio ACID
**Concepto:** Conjunto de propiedades que garantizan la fiabilidad de las transacciones en bases de datos.

**Características:**
- **Atomicidad:** Las transacciones se completan totalmente o no se realizan (todo o nada)
  *Ejemplo: Transferencia bancaria donde se debe debitar de una cuenta y acreditar en otra; si falla un paso, se revierte todo*
- **Consistencia:** La base de datos siempre mantiene reglas de integridad
- **Aislamiento:** Transacciones concurrentes no interfieren entre sí
- **Durabilidad:** Los cambios confirmados persisten incluso ante fallos del sistema

**Limitación:** La durabilidad requiere almacenamiento no volátil, que es ~100 veces más lento que la memoria RAM.

### 1.2. Teorema CAP (Conjetura de Brewer)
**Concepto:** En sistemas distribuidos, sólo se pueden garantizar 2 de estas 3 propiedades simultáneamente:

**Propiedades:**
- **Consistencia (C):** Todas las lecturas muestran el estado más reciente o un error
- **Disponibilidad (A):** Todas las peticiones reciben respuesta (puede no ser la más actual)
- **Tolerancia a Particionamiento (P):** El sistema funciona aunque se pierda comunicación entre nodos

**Combinaciones posibles:**
- **CA:** Sistemas que priorizan consistencia y disponibilidad (requieren comunicación constante entre nodos)
- **CP:** Sistemas que priorizan consistencia y tolerancia a particionamiento (pueden rechazar peticiones si no pueden garantizar consistencia)
- **AP:** Sistemas que priorizan disponibilidad y tolerancia a particionamiento (pueden mostrar datos no actualizados)

## 2. Tipos de Almacenamiento de Datos

### 2.1. Bases de Datos Relacionales
**Características:**
- Estructura en tablas con filas (registros) y columnas (atributos)
- Usan SQL como lenguaje de consulta
- Esquemas predefinidos con tipos de datos específicos
- Alto rendimiento mediante índices
- Escalan verticalmente (mejor hardware)

**Limitación para Big Data:** No escalan horizontalmente fácilmente.

### 2.2. Dataset
**Concepto:** Colección de datos relacionados para un propósito específico.

**Ejemplos:**
- Colección de tweets o posts
- Series de registros de bases de datos
- Mediciones de estaciones meteorológicas

**Formatos comunes:** CSV, XML, JSON, tablas, archivos multimedia.

### 2.3. Almacén de Datos (Data Warehouse)
**Características:**
- Repositorio central para datos históricos y actuales
- Usado para Business Intelligence (BI) y análisis
- Incluye subsistemas OLAP
- Datos cargados periódicamente mediante procesos ETL
- No diseñado para transacciones en tiempo real

### 2.4. Data Lake
**Concepto:** Repositorio que almacena datos en bruto en su formato original.

**Tipos de datos almacenados:**
- **Estructurados:** Formato predefinido (Excel, formularios web)
- **No estructurados:** Sin formato definido (vídeos, imágenes, emails)
- **Semiestructurados:** Formato definido pero complejo (HTML, gráficos)

**Arquitectura clave:**
1. Ingesta de datos escalable
2. Almacenamiento masivo
3. Seguridad robusta
4. Herramientas de análisis
5. Gobierno de datos

### 2.5. Data Lakehouse
**Concepto:** Arquitectura que combina Data Lake y Data Warehouse.

**Ventajas:**
- Almacenamiento flexible y económico
- Soporte para ML, BI y análisis predictivo
- Estructuras de datos y gestión integradas

**Ejemplos de implementaciones:** Delta Lake, Databricks, Snowflake, Microsoft Fabric.

## 3. Comparativa: Data Lake vs Data Warehouse

| Característica | Data Lake | Data Warehouse |
|----------------|-----------|----------------|
| **Naturaleza datos** | Todos los tipos | Sólo estructurados |
| **Formato** | Datos en bruto | Datos procesados |
| **Fuentes** | Big Data, IoT, redes sociales | Aplicaciones, transacciones |
| **Escalabilidad** | Fácil y económica | Compleja |
| **Usos principales** | Análisis predictivo, ML | Informes, Business Intelligence |

## 4. Aplicación Práctica

### 4.1. Selección según necesidades:
- **Transacciones críticas:** Bases de datos ACID (relacionales)
- **Big Data y análisis:** Data Lakes o Data Lakehouses
- **Business Intelligence:** Data Warehouses
- **Sistemas distribuidos:** Evaluar prioridades según teorema CAP

### 4.2. Consideraciones de diseño:
1. Definir requisitos de consistencia vs disponibilidad
2. Evaluar necesidades de escalabilidad horizontal
3. Considerar tipos de datos a almacenar
4. Planificar procesos de ingesta y transformación
5. Implementar gobierno y seguridad de datos

**Conclusión:** La elección del tipo de base de datos y sus propiedades depende del caso de uso específico, balanceando consistencia, disponibilidad, rendimiento y costos según las necesidades del sistema distribuido.

​
# Resumen Detallado: Teorema CAP, BASE y Procesamiento de Datos en Big Data

## 1. Teorema CAP y Filosofía BASE

### Teorema CAP
*   **Enunciado:** En un sistema distribuido, es imposible garantizar simultáneamente las tres propiedades siguientes:
    *   **Consistencia (C):** Todas las lecturas reciben la versión más reciente de los datos o un error.
    *   **Disponibilidad (A):** Todas las peticiones reciben una respuesta (éxito o error), sin garantía de que sea la última versión.
    *   **Tolerancia al Particionamiento (P):** El sistema sigue funcionando a pesar de cortes en la comunicación (particiones de red) entre nodos.
*   **Implicación Práctica:** Ante una partición de red (P), el sistema debe elegir entre **C** (consistencia) y **A** (disponibilidad). No se pueden mantener las tres.
    *   **Elección CP:** Se prioriza la consistencia. Si hay partición, algunos nodos pueden volverse inaccesibles (no disponibles) para evitar lecturas inconsistentes.
    *   **Elección AP:** Se prioriza la disponibilidad. Si hay partición, el sistema sigue respondiendo, pero puede devolver datos que no son los más recientes (inconsistencia).

### Filosofía BASE
Es un principio de diseño para bases de datos distribuidas que opta por la **disponibilidad y la tolerancia al particionamiento (AP)** del teorema CAP, relajando la consistencia fuerte.
*   **Básicamente Disponible (Basically Available):** El sistema siempre responde, incluso durante fallos o particiones. La respuesta puede ser un dato no actualizado.
*   **Estado Blando (Soft State):** El estado del sistema puede cambiar con el tiempo sin necesidad de nuevas escrituras, debido a la propagación asíncrona de actualizaciones entre nodos. Dos lecturas consecutivas pueden dar resultados diferentes.
*   **Consistencia Eventual (Eventual Consistency):** Si no se realizan nuevas escrituras, tras un tiempo, todas las réplicas de los datos convergerán y se volverán consistentes. La consistencia no es inmediata, sino *eventual*.
*   **Aplicabilidad:** Adecuado para sistemas donde la disponibilidad es crítica y se puede tolerar una inconsistencia temporal (ej., redes sociales, catálogos de productos). **No es adecuado para sistemas transaccionales** (como sistemas bancarios), donde la consistencia es obligatoria.

---

## 2. Conceptos de Procesamiento de Datos

### 4.1. Procesamiento en Paralelo
Se refiere a la ejecución simultánea de múltiples tareas o hilos dentro de una misma máquina.
*   **Evolución:** De la multitarea simulada por software (un solo núcleo) al paralelismo real con hardware multinúcleo y multihilo.
*   **Conceptos Clave:**
    *   **Multinúcleo:** Un procesador con varias CPUs (núcleos) independientes.
    *   **Multihilo:** Una CPU capaz de gestionar más de un hilo de ejecución simultáneamente, aprovechando recursos ociosos. No equivale a núcleos físicos adicionales.
*   **Paralelización de Tareas:**
    *   **Tarea Paralelizable:** Se puede dividir en subtareas independientes que se ejecutan concurrentemente. **Ejemplo:** Sumar un billón de números dividiéndolos en grupos para cada núcleo.
    *   **Tarea No Paralelizable:** Existen dependencias secuenciales que impiden una división eficiente. **Ejemplo:** Un cálculo donde cada paso depende del resultado del anterior (como sumar o restar alternativamente basándose en la paridad del resultado acumulado).

### 4.2. Procesamiento Distribuido
Implica la ejecución coordinada de tareas en múltiples máquinas (nodos) conectadas en red, formando un clúster. Combina el paralelismo dentro de cada nodo con la distribución entre ellos.
*   **Comunicación y Velocidad:** La eficiencia depende críticamente de la latencia en la comunicación entre procesos. La velocidad decrece según la proximidad:
    1.  **Dentro de la misma máquina** (RAM, disco): Más rápido.
    2.  **Entre máquinas en el mismo switch** (mismo rack): Rápido en red.
    3.  **Entre máquinas en switches diferentes** (distintos racks): Más lento, más saltos de red.
    4.  **Entre Centros de Procesamiento de Datos (CPD) diferentes:** El más lento.
*   **Gestión:** Frameworks como Hadoop o Spark abstraen y optimizan esta complejidad para el desarrollador.

### 4.3. Estrategias de Procesamiento de Datos
Se eligen según el volumen, naturaleza de los datos y requisitos de tiempo.
*   **Por Lotes (Batch/Offline):**
    *   Procesamiento de grandes volúmenes de datos de una vez.
    *   El tiempo de respuesta no es crítico (horas o días).
    *   **Uso típico:** Análisis históricos, generación de informes, entrenamiento de modelos de ML.
*   **Transaccional (OLTP - Procesamiento de Transacciones en Línea):**
    *   Procesamiento de muchas transacciones cortas (lecturas, inserciones, actualizaciones).
    *   **Tiempo de respuesta crítico** (subsegundo). Requiere **consistencia fuerte**.
    *   **Uso típico:** Cajeros automáticos, sistemas de reservas, comercio electrónico.
*   **En Tiempo Real (Realtime) / Streaming:**
    *   Procesamiento de flujos continuos de datos con latencia mínima (segundos o milisegundos).
    *   **Uso típico:** Monitoreo de sistemas, detección de fraudes, paneles de control en vivo.

---

### Caso Práctico Ilustrativo: Sega Saturn vs. PlayStation
La Sega Saturn (1995), con dos procesadores, ilustra los desafíos del paralelismo:
*   **Complejidad de Programación:** Difícil dividir y sincronizar tareas entre procesadores, aumentando los costes de desarrollo y los errores.
*   **Rendimiento Subóptimo:** Imposible un balanceo de carga perfecto. Los tiempos de espera y la sobrecarga por comunicación reducían la ganancia de rendimiento.
*   **Costo Mayor:** Hardware más caro.
Esto contrasta con la arquitectura de un solo procesador de la PlayStation, más simple para los desarrolladores y con un mejor rendimiento/costo, contribuyendo a su éxito en el mercado.

​
# Resumen Detallado: Procesamiento de Datos, Arquitectura y Paisaje de Big Data

## 1. Tipos de Procesamiento de Datos

### 1.1. Procesamiento en Tiempo Real
- **Definición:** Produce resultados en un corto espacio de tiempo, similar al procesamiento transaccional.
- **Aplicación:** Analíticas interactivas (generalmente descriptivas) donde un usuario consulta estadísticas.
- **Requisito:** Tiempo de respuesta pequeño para mantener la interactividad.
- **Infraestructura:** Suele emplear subsistemas OLAP, frecuentemente almacenados en memoria.
- **Nota:** El término "tiempo real" puede aplicarse tanto a procesamiento analítico como transaccional, pero no son intercambiables. Un procesamiento analítico en tiempo real no es transaccional, ya que este último implica la existencia de una transacción.

### 1.2. Procesamiento en Streaming
- **Definición:** Procesamiento que debe producirse a la velocidad a la que se recibe el flujo continuo de datos de entrada.
- **Característica clave:** Capacidad de procesar datos que entran constantemente.
- **Complejidad:** Los sistemas deben actualizar las estructuras de datos en memoria a medida que llegan nuevos datos, lo que limita el volumen máximo que se puede tratar simultáneamente.
- **Diferencia con Tiempo Real:** Ambos requieren corto tiempo de respuesta, pero el *streaming* añade la restricción de procesar a la velocidad de ingesta del flujo de datos.

**Autoevaluación (Respuesta Correcta):** La diferencia principal es que el tiempo real implica resultados rápidos, mientras que el *streaming* implica la capacidad de procesar datos que entran constantemente.

## 2. Sistemas de Procesamiento: OLTP vs. OLAP

### 2.1. OLTP (Procesamiento de Transacciones en Línea)
- **Propósito:** Gestionar datos operacionales del día a día, relacionados con acciones que necesitan realizarse en tiempo real ("online").
- **Características:**
    - Transacciones sencillas (INSERT, SELECT, UPDATE, DELETE).
    - Sin analítica compleja.
    - Tiempos de respuesta inferiores a un segundo.
- **Base de datos típica:** Bases de datos **relacionales**.

### 2.2. OLAP (Procesamiento Analítico en Línea)
- **Propósito:** Procesar consultas analíticas en tiempo real para Business Intelligence (BI) y minería de datos.
- **Características:**
    - Consultas complejas que afectarían a múltiples tablas en un sistema relacional.
    - Optimizado para respuestas muy rápidas.
- **Estructura de datos:**
    - Bases de datos **multidimensionales** (o "cubos OLAP").
    - Datos almacenados **desnormalizados** para rendimiento.
    - Frecuentemente almacenados en **memoria RAM** (lo que impone un límite de volumen).
- **Rasgo típico (Respuesta Correcta en Autoevaluación):** Almacenamiento en memoria RAM de estructuras multidimensionales.

## 3. Principio SCV (Speed, Consistency, Volume)

Este principio, aplicable al **procesamiento distribuido de datos**, establece que un sistema solo puede garantizar como máximo 2 de estas 3 características:

- **Velocidad (Speed):** Tiempo de procesamiento desde la recepción de los datos. Mayor en sistemas de tiempo real que por lotes (*batch*).
- **Consistencia (Consistency):** Precisión de los resultados analíticos. Alta si se usan todos los datos; menor si se emplean técnicas de muestreo.
- **Volumen (Volume):** Cantidad de datos que pueden procesarse. En Big Data, el alto volumen es una característica siempre presente.

### 3.1. Escenarios y Compromisos (Trade-offs)
1.  **Velocidad + Consistencia:** No se puede procesar un alto volumen, ya que aumentaría el tiempo.
2.  **Consistencia + Volumen:** No es posible una alta velocidad de procesamiento.
3.  **Volumen + Velocidad:** Requiere usar muestreo (subconjunto de datos), lo que reduce la consistencia.

**Implicación en Big Data:** Dado que manejar grandes volúmenes (V) es obligatorio:
- **Analítica en tiempo real (S+V):** Normalmente no usará *todos* los datos, sacrificando consistencia (C) mediante muestreo.
- **Procesamiento por lotes (C+V):** Sí puede usar todo el conjunto de datos, produciendo resultados consistentes, pero sin la exigencia de velocidad en tiempo real.

## 4. Arquitectura por Capas de Big Data

Es una arquitectura generalizada donde el flujo de datos pasa por capas específicas:

1.  **Ingestión:** Obtención de datos desde múltiples fuentes preexistentes, adaptándose a sus protocolos y formatos.
2.  **Colección:** Integración y unificación de datos de fuentes diversas en un conjunto con sentido propio. *(Respuesta correcta en autoevaluación)*.
3.  **Almacenamiento:** Empleo de sistemas de almacenamiento distribuido diseñados para grandes volúmenes.
4.  **Procesamiento:** Infraestructura que facilita el procesamiento (por lotes, tiempo real, *streaming* o híbrido) según lo solicite la capa superior.
5.  **Consulta y Analítica:** Capa donde se extrae valor mediante estadística, algoritmos y análisis.
6.  **Visualización:** Interfaz para el usuario final (reportes, cuadros de mando interactivos) desde donde se toman decisiones.
7.  **Seguridad (Transversal):** Asegura los datos frente a ataques y usos malintencionados.
8.  **Monitorización (Transversal):** Auditoría, control y gestión de la calidad y frescura de los datos, clave para la gobernanza de datos.

## 5. El Paisaje (Landscape) de Big Data

Se refiere al amplio panorama de herramientas y utilidades para desarrollar proyectos de Big Data, a menudo asociadas a capas específicas de la arquitectura.

**Ejemplos de herramientas (basados en el ecosistema Hadoop inicial):**
- **Plataforma:** **Hadoop** (pionera, enfocada en procesamiento por lotes).
- **Almacenamiento:** **HDFS** (Sistema de Archivos Distribuido de Hadoop).
- **Ingestión/Transferencia:** **Sqoop** (para bases de datos relacionales), **Flume** (para datos en *streaming*).
- **Consulta/Procesamiento:** **Hive** (consultas tipo SQL), **Pig** (lenguaje de flujo de datos).
- **Análisis Avanzado:** **Spark** (procesamiento en memoria más rápido), **H2O** (aprendizaje automático).
- **Visualización:** **Power BI**, **Tableau**.

**Recomendación:** Buscar "big data landscape" en un motor de búsqueda para visualizar la diversidad y relaciones de estas herramientas.

---
**Propósito General:** Este documento proporciona una base estructurada para comprender los paradigmas de procesamiento (tiempo real, *streaming*, OLTP, OLAP), los principios que los rigen (SCV), la arquitectura típica de un sistema de Big Data y el ecosistema de herramientas disponible, facilitando el estudio y la aplicación práctica de estos conceptos.

​
# Resumen: Ecosistema Big Data, Casos de Uso y Roles Profesionales

## 🛠️ Herramientas Principales del Ecosistema Big Data

- **Hive**: Plataforma construida sobre Hadoop que permite gestionar grandes datasets en HDFS usando HiveSQL (dialecto de SQL), facilitando el desarrollo en entornos Hadoop.
- **Spark**: Plataforma de procesamiento en tiempo real y streaming que interactúa con herramientas Hadoop, considerada parte integral del ecosistema.
- **Nifi**: Sistema distribuido de Apache para ingesta y transformación de datos mediante modelo streaming, originalmente desarrollado por la NSA.
- **Kafka**: Middleware de mensajería que funciona como broker, facilitando comunicación asíncrona entre sistemas heterogéneos mediante colas de mensajes.
- **Bases de datos NoSQL/NewSQL**: Soluciones de almacenamiento especializadas para casos específicos.
- **Herramientas de analítica y visualización**: Diversas soluciones para análisis y representación gráfica de datos.

## 🌍 Casos de Uso Actuales del Big Data

- **Industria 4.0**: Almacenamiento y análisis de datos provenientes de sensores IoT.
- **Plataformas de streaming**: Motores de recomendación basados en eventos de navegación y uso de servicios.
- **Aplicaciones de mapas**: Recomendación de rutas usando datos históricos y en tiempo real de conductores.
- **Redes sociales**: Fuente de datos para modelos generativos y análisis de sentimiento para publicidad y evaluación de productos.

## 👥 Roles Profesionales en la Gestión de Datos

### **Administrador de Base de Datos**
Responsable del diseño, implementación, mantenimiento y operación de sistemas de bases de datos. Gestiona disponibilidad, rendimiento, seguridad, copias de seguridad y recuperación ante desastres.

### **Ingeniero de Datos**
Diseña e implementa cargas de trabajo de datos: canalizaciones de ingesta, limpieza, transformación y almacenes de datos. Usa tecnologías relacionales/no relacionales y garantiza la privacidad de datos. Crea la infraestructura para el análisis posterior.

### **Analista de Datos**
Transforma datos en información útil para la toma de decisiones empresariales. Identifica tendencias, diseña modelos analíticos y crea informes y visualizaciones. Habilidades requeridas:
- Principios estadísticos básicos
- Limpieza y visualización de datos
- Herramientas como Excel, Tableau, Power BI
- Pensamiento analítico y crítico

### **Científico de Datos**
Aplica estadística, aprendizaje automático y análisis avanzado para resolver problemas empresariales complejos. Requiere:
- Conocimientos estadísticos y analíticos avanzados
- Programación (Python, R, Java)
- Familiaridad con Hadoop
- Análisis predictivo y entrenamiento de modelos

## 🔍 Comparación: Analista vs. Científico de Datos

**Objetivo común**: Traducir análisis de datos en inteligencia empresarial.

**Analista de Datos**: Enfocado en procesamiento, reportes, visualización y análisis exploratorio usando herramientas existentes.

**Científico de Datos**: Enfocado en algoritmos avanzados, aprendizaje automático, análisis predictivo y desarrollo de modelos.

**Habilidades compartidas**: Pensamiento analítico, narración de datos, habilidades interpersonales.

---

**Propósito general**: Este documento proporciona una visión completa del ecosistema tecnológico del Big Data, sus aplicaciones prácticas en diversos sectores industriales, y los roles profesionales especializados que intervienen en la gestión, procesamiento y análisis de datos a gran escala, destacando tanto las herramientas técnicas como las competencias humanas necesarias en este campo.

​
