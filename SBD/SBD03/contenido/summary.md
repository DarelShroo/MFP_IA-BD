# 📚 Gestión de Datos en Big Data - Guía

## 📖 Resumen General
Este documento aborda los procesos clave para gestionar datos en entornos de Big Data, comenzando con un caso práctico que ilustra la necesidad de separar sistemas transaccionales (OLTP) de analíticos. Se explica en detalle el proceso **ETL (Extraer, Transformar, Cargar)** como mecanismo fundamental para alimentar sistemas de análisis, diferenciándolo claramente de la **integración de datos**. Se describen las tres fases de ETL con ejemplos prácticos, se mencionan herramientas específicas para Big Data, y se introduce la importancia de la normativa y el gobierno de datos. El objetivo es proporcionar una comprensión estructurada de cómo preparar y gestionar datos para análisis eficientes sin afectar sistemas operativos.

---

## 🔄 1. Proceso ETL (Extraer, Transformar, Cargar)

### 1.1 Diferencias Clave: ETL vs. Integración de Datos
| **ETL** | **Integración de Datos** |
|---------|--------------------------|
| **Objetivo:** Mover y transformar datos desde fuentes a un destino único (como un almacén de datos). | **Objetivo:** Proporcionar una vista unificada de datos que **siguen residiendo** en sus fuentes originales. |
| **Resultado:** Se crea una **copia modificada** de los datos en el destino. | **Resultado:** No se copian datos; se accede a ellos en tiempo real desde las fuentes. |
| **Uso típico:** Alimentar almacenes de datos, data lakes (HDFS, S3) o migrar sistemas. | **Uso típico:** Consultas unificadas sobre múltiples sistemas sin replicación. |

**Ejemplo práctico:**  
En el caso inicial, el equipo cometió el error de ejecutar análisis directamente sobre el **ERP (sistema transaccional OLTP)**, lo que ralentizó tanto las transacciones como los análisis. La solución correcta era usar ETL para llevar los datos a un **almacén de datos independiente** diseñado para análisis (OLAP).

### 1.2 Las Tres Fases de ETL

#### 📥 **Fase 1: Extraer (Extract)**
- **Objetivo:** Obtener datos desde fuentes heterogéneas.
- **Fuentes comunes:**
  - Bases de datos relacionales (ERP, CRM).
  - Ficheros (CSV, JSON, logs).
  - Streams en tiempo real (transacciones, IoT, logs web).
- **Desafíos:**
  - Compatibilidad con formatos y protocolos diversos.
  - **No afectar el rendimiento** de los sistemas fuentes (especialmente OLTP).
- **Estrategias:**
  - Usar conectores preexistentes de la herramienta ETL.
  - Programar intermediarios personalizados.
  - Extraer en horarios de baja carga (ej. nocturnos) si es necesario.
- **Resultado:** Datos validados listos para transformación.

#### ⚙️ **Fase 2: Transformar (Transform)**
- **Objetivo:** Aplicar reglas para que los datos sean consistentes, limpios y adecuados para el destino.
- **Transformaciones típicas:**
  - **Limpieza:** Eliminar duplicados, corregir formatos.
  - **Selección:** Filtrar columnas o registros relevantes.
  - **Derivación:** Crear nuevos campos (ej. `área = lado1 * lado2`).
  - **Codificación:** Unificar valores (ej. traducir "Válido" a 1).
  - **Agregación:** Calcular totales, medias.
  - **Unificación:** Combinar datos de múltiples fuentes.
- **Ejemplo:** Si una fuente usa "Sí"/"No" y otra 1/0, se estandariza a un solo formato.
- **Importancia:** Es la fase que más **comprensión del negocio** requiere, ya que se debe entender el significado de los datos en origen y destino.

#### 📤 **Fase 3: Cargar (Load)**
- **Objetivo:** Insertar los datos transformados en el almacén destino.
- **Destinos comunes:**
  - Almacenes de datos (data warehouses) para OLAP.
  - Sistemas de ficheros distribuidos (**HDFS, Amazon S3**) en Big Data.
  - Nuevos sistemas OLTP (en migraciones).
- **Estrategias de carga:**
  1. **Carga completa:** Reemplazar todos los datos cada vez.
  2. **Carga incremental:** Añadir solo datos nuevos.
  3. **Actualización incremental:** Modificar datos existentes si cambian.
- **Consideraciones avanzadas:**
  - **Registro histórico (auditoría):** Algunos destinos permiten guardar versiones anteriores de los datos para rastrear cambios.

---

## 🛠️ 2. Herramientas para ETL en Big Data
*(El texto menciona que se abordarán dos herramientas comunes, aunque no las detalla completamente en el fragmento proporcionado).*

**Ejemplos típicos en ecosistemas Big Data:**
- **Apache NiFi:** Para flujos de datos automatizados.
- **Apache Spark (con Spark SQL/DataFrames):** Para transformaciones distribuidas a gran escala.
- **Herramientas nativas de cloud:** AWS Glue, Google Dataflow.

---

## ⚖️ 3. Normativa y Gobierno de Datos
*(El texto anuncia que se tratarán estos temas, aunque no los desarrolla en el fragmento).*

**Puntos clave mencionados:**
- **RGPD (Reglamento General de Protección de Datos):** Normativa europea vigente desde 2018.
- **Gobierno de Datos:** Supervisión global de la gestión de datos, asegurando calidad, seguridad y cumplimiento normativo.

---

## 💡 Conclusiones y Buenas Prácticas
1. **Separa sistemas OLTP y OLAP:** Usa ETL para crear almacenes analíticos independientes.
2. **Planifica la extracción:** Coordina con los equipos de operaciones para no impactar sistemas productivos.
3. **Invierte en la fase de transformación:** Es donde se asegura la calidad y utilidad de los datos.
4. **Elige la estrategia de carga adecuada:** Según si necesitas historial completo o incremental.
5. **Considera el cumplimiento normativo:** Especialmente al manejar datos personales (RGPD).

**Ejemplo final aplicado:**  
Para el caso inicial del clúster de 1024 nodos con HDFS, el proceso sería:
1. **Extraer** los 2,5 PB de bases de datos y ficheros en horarios controlados.
2. **Transformar** los datos para unificar formatos y limpiar inconsistencias.
3. **Cargar** en HDFS en incrementales, manteniendo versiones si es necesario para auditoría.

​
# 📚 Resumen: Herramientas de Ingesta, Integración de Datos y Normativa (RGPD)

## 1. Herramientas de Ingesta de Datos en el Ecosistema Hadoop

### 1.1. Apache Sqoop (SQL-to-Hadoop)
*   **Definición:** Herramienta de línea de comandos diseñada para transferir datos **desde bases de datos relacionales** (Oracle, MySQL, SQL Server, etc.) a sistemas de almacenamiento distribuido.
*   **Características Principales:**
    *   Importaciones masivas (*bulk*) de tablas o bases de datos completas.
    *   Transferencia paralelizada para alto rendimiento.
    *   Mecanismos para evitar sobrecargar las fuentes.
    *   Mapeo directo a HDFS, HBase o Hive.
    *   Interfaz de línea de comandos y acceso programático vía JDBC.
    *   Originalmente para HDFS, ahora compatible con otros sistemas como Amazon S3.
*   **Ejemplo de uso:** Migrar una base de datos transaccional de MySQL a HDFS para realizar análisis histórico.

### 1.2. Apache Flume
*   **Definición:** Software distribuido para capturar y agregar **datos en streaming** desde fuentes no estructuradas o semiestructuradas (como logs de servidores web).
*   **Características Principales:**
    *   Arquitectura basada en eventos y flujos de datos (*streaming*).
    *   Componentes: **Source** (fuente), **Channel** (canal), **Sink** (destino).
    *   Permite crear topologías complejas de procesamiento de datos.
    *   Diseñado para alto ancho de banda y baja latencia.
    *   Tolerante a fallos con mecanismos de recuperación.
    *   Escalabilidad casi lineal.
*   **Ejemplo de uso:** Capturar en tiempo real los logs de acceso a un sitio web y canalizarlos a HDFS para análisis de comportamiento del usuario.

**Conclusión:** Sqoop es ideal para datos estructurados en reposo (bases de datos), mientras que Flume lo es para datos no estructurados en movimiento (*streaming*).

---

## 2. Integración de Datos

### 2.1. Concepto y Diferencia con ETL
*   **ETL (Extract, Transform, Load):** Proceso que **mueve y transforma** datos de un origen a un destino (data warehouse). Implica replicación física.
*   **Integración de Datos:** Proceso que **proporciona una visión unificada y coherente** de los datos dispersos en múltiples fuentes, **sin necesariamente moverlos**. El objetivo es que usuarios y aplicaciones accedan a los datos como si fueran una sola fuente.

### 2.2. Técnicas de Integración (de menos a más automatizada)
1.  **Integración Manual:** Acceso directo y no unificado a las fuentes por parte del usuario.
2.  **Integración Basada en Aplicación:** Una aplicación específica se encarga de acceder y combinar los datos.
3.  **Integración Basada en Middleware:** Una capa de software (*middleware*) facilita datos transformados, pero las aplicaciones finales aún pueden necesitar integrar múltiples flujos.
4.  **Integración Virtual (Acceso Uniforme):** **Técnica más avanzada.** Se crea una **base de datos virtual** con un esquema unificado. Las consultas se redirigen a las fuentes originales en tiempo real mediante *wrappers*.
    *   **Ventaja:** Los datos están siempre actualizados (sin latencia).
    *   **Desventaja:** Carga las fuentes con cada consulta y dificulta el mantenimiento de históricos.

**Ejemplo práctico:** Una empresa con múltiples bases de datos heredadas (*legacy*) para distintos clientes puede usar **Integración Virtual** para ofrecer un portal unificado de consulta sin tener que detener los sistemas existentes ni replicar terabytes de datos.

---

## 3. Normativa de Tratamiento de Datos: RGPD

### 3.1. Contexto Legal
*   El **Reglamento General de Protección de Datos (RGPD)** es la normativa europea vigente desde mayo de 2018.
*   En España, la **Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD)** lo desarrolla y complementa.
*   Su objetivo es proteger los derechos fundamentales de las personas (honor, intimidad) en el entorno digital, especialmente relevante en la era del Big Data.

### 3.2. Definiciones Clave (Art. 4 RGPD)
*   **Datos Personales:** Cualquier información sobre una persona física **identificada o identificable** (ej., nombre, DNI, ubicación, IP, datos genéticos).
*   **Interesado:** La persona física a la que pertenecen los datos.
*   **Responsable del Tratamiento:** La entidad que **determina los fines y medios** del tratamiento de datos (la empresa que decide "qué" hacer con los datos y "cómo").
*   **Encargado del Tratamiento:** La entidad que **trata los datos por cuenta del responsable** (ej., un proveedor de servicios en la nube).
*   **Delegado de Protección de Datos (DPO):** Figura clave que supervisa el cumplimiento del RGPD dentro de una organización.
*   **Tratamiento:** Cualquier operación realizada con datos personales (recogida, consulta, uso, almacenamiento, supresión, etc.).

### 3.3. Impacto en Proyectos de Big Data
*   Los proyectos que utilicen datos personales deben diseñarse considerando los principios del RGPD desde su origen (*Privacy by Design*): licitud, transparencia, limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad.
*   **Ejemplo de aplicación:** Un sistema de *recommendation engine* basado en Big Data debe informar claramente a los usuarios sobre qué datos recoge (historial de navegación, compras) y con qué fin, obteniendo su consentimiento explícito y permitiendo en todo momento el ejercicio de derechos como el acceso, la rectificación o la oposición al tratamiento.

​
# 📚 Resumen del RGPD y Gobierno de Datos

## 1. Conceptos Clave del RGPD (Reglamento General de Protección de Datos)

### 1.1. Definiciones Fundamentales
- **Tratamiento de datos**: Cualquier operación realizada sobre datos personales (recogida, registro, organización, conservación, modificación, consulta, comunicación, limitación, supresión, etc.), ya sea mediante procedimientos automatizados o manuales.
- **Elaboración de perfiles**: Tratamiento automatizado que utiliza datos personales para evaluar aspectos personales (rendimiento profesional, situación económica, salud, preferencias, comportamiento, etc.).
- **Consentimiento**: Manifestación de voluntad libre, específica, informada e inequívoca del interesado para aceptar el tratamiento de sus datos.
- **Actores principales**:
  - **Interesado**: Persona física cuyos datos se tratan.
  - **Responsable del tratamiento**: Decide los fines y medios del tratamiento.
  - **Encargado del tratamiento**: Trata datos por cuenta del responsable.
  - **Delegado de Protección de Datos (DPO)**: Supervisa el cumplimiento del RGPD.

### 1.2. Ámbito de Aplicación y Bases Legales
- **Ámbito subjetivo**: Se aplica a responsables y encargados del tratamiento.
- **Ámbito territorial**: Aplica si responsables/encargados están establecidos en la UE, o si el tratamiento se dirige a interesados en la UE (ofreciendo bienes/servicios o controlando su comportamiento).
- **Bases legales para el tratamiento** (artículos 6-8 RGPD):
  1. **Condición básica**: Consentimiento del interesado (debe ser demostrable y solicitado claramente).
  2. **Excepciones** (tratamiento sin consentimiento explícito):
     - Ejecución de un contrato.
     - Cumplimiento de obligación legal.
     - Protección de intereses vitales.
     - Misión de interés público.
     - Intereses legítimos del responsable (prevención de fraude, seguridad), informando al interesado.

## 2. Derechos de los Interesados
Los derechos ARCO se amplían bajo el RGPD:
- **Derecho de acceso**: Obtener copias de datos personales y detalles de su tratamiento.
- **Derecho de rectificación**: Corregir datos inexactos o completar incompletos.
- **Derecho al olvido**: Supresión de datos personales.
- **Derecho de limitación**: Impedir tratamientos adicionales en ciertas circunstancias.
- **Derecho a la portabilidad**: Recibir datos en formato estructurado para transmitirlos a otro responsable.
- **Derecho a la notificación**: Ser informado sobre rectificaciones, supresiones o limitaciones.
- **Transparencia reforzada**: Los interesados deben recibir información clara sobre identidad del responsable, finalidades del tratamiento, bases legales, transferencias internacionales, período de retención, derechos y posibilidad de reclamar ante autoridades.

## 3. Gobierno y Rendición de Cuentas
Los responsables deben:
- **Garantizar y demostrar el cumplimiento** del RGPD.
- **Implementar protección de datos**:
  - **Por diseño (Privacy by Design)**: Integrar protección desde la concepción de sistemas.
  - **Por defecto (Privacy by Default)**: Configurar sistemas para maximizar privacidad automáticamente.
- **Medidas técnicas y organizativas**:
  - **Seudonimización**: Tratar datos de modo que no se identifique a una persona sin información adicional.
  - **Minimización de datos**: Tratar solo datos necesarios para la finalidad.
- **Evaluación de Impacto**: Realizarla antes de tratamientos de alto riesgo.
- **Designar DPO** en casos específicos (autoridades públicas, observación sistemática a gran escala, tratamiento de datos sensibles a gran escala).
- **Mantener registros** de actividades de tratamiento.

## 4. Obligaciones de los Encargados del Tratamiento
- **Contrato escrito obligatorio** con el responsable, que debe estipular:
  - Tratamiento solo según instrucciones del responsable.
  - Obligación de confidencialidad del personal.
  - Medidas de seguridad adecuadas al riesgo.
  - **Subcontratación solo con autorización previa y por escrito** del responsable, replicando obligaciones en el subcontrato.
  - Asistencia al responsable en cumplimiento, evaluaciones de impacto y auditorías.
  - Supresión o devolución de datos al finalizar el tratamiento.

## 5. Seguridad de los Datos
- **Medidas técnicas y organizativas obligatorias**:
  - Seudonimización y cifrado de datos.
  - Capacidad de restaurar datos rápidamente.
  - Procesos de verificación y evaluación regulares.
- **Notificación de violaciones de seguridad**:
  - **A la autoridad de control**: En 72 horas tras detección, salvo que el riesgo sea improbable.
  - **A los interesados**: Cuando el riesgo para sus derechos y libertades sea alto.
  - **Encargado a responsable**: Comunicación sin dilación de cualquier violación.

## 6. Gobierno de Datos
- **Definición**: Ejercicio de control, autoridad y comunicación sobre la gestión de datos para asegurar su corrección según políticas y mejores prácticas.
- **Ciclo**: Incluye planificación, ejecución y seguimiento.
- **Diferenciación clave**:
  - **Gestión de Datos**: Asegurar que la organización obtiene valor de los datos.
  - **Gobierno de Datos**: Supervisar la gestión de datos, asegurando que las decisiones, personas y procesos se comportan correctamente respecto a los datos.
- **Problemas comunes** (ejemplo del caso práctico): Duplicidad de datasets, falta de formatos estandarizados, ausencia de gestión de permisos, riesgo de pérdida o modificación inadecuada de datos.

---

**Propósito General**: Este documento proporciona una guía estructurada sobre el RGPD, explicando sus conceptos clave, obligaciones, derechos y mecanismos de cumplimiento, junto con una introducción al Gobierno de Datos como marco de supervisión esencial para la gestión correcta y segura de la información personal en las organizaciones.

​
# 📚 Gobierno de Datos - Guía de Estudio

## 🔍 Relación entre Gobierno de Datos y Gestión de Datos
- **Concepto clave:** El Gobierno de Datos es **una actividad dentro** de la Gestión de Datos, no son equivalentes.
- **Diferencia fundamental:** La Gestión de Datos busca que la organización obtenga valor de los datos, mientras el Gobierno de Datos establece el marco para lograrlo.
- **Ejemplo:** Si la Gestión de Datos es construir una casa, el Gobierno de Datos son los planos, normas de construcción y roles de los trabajadores.

## 🎯 4.1 - Objetivos del Gobierno de Datos

### Objetivos Generales
- **Gestionar datos como activos:** Facilitar que las organizaciones traten sus datos como recursos valiosos.
- **Establecer marco normativo:** Definir, implementar y comunicar:
  - Principios
  - Políticas
  - Procedimientos
  - Métricas
  - Herramientas
  - Responsabilidades
- **Monitorizar cumplimiento:** Supervisar y guiar la adherencia a las políticas establecidas.

### Objetivos por Áreas Específicas
1. **Gestión de riesgos:** Controlar posibles incidentes relacionados con datos
2. **Seguridad:** Proteger los datos contra accesos no autorizados
3. **Privacidad:** Resguardar información personal según normativas
4. **Cumplimiento normativo:** Asegurar obediencia a leyes y regulaciones
5. **Calidad de datos:** Mantener datos precisos, completos y confiables
6. **Gestión de metadatos:** Administrar adecuadamente la información sobre los datos
7. **Procesos eficaces:** Optimizar procedimientos relacionados con datos
8. **Ciclo de vida controlado:** Gestionar claramente desde creación hasta eliminación de datos

**Ejemplo de objetivos NO incluidos:** 
- Evitar procesamiento por lotes (incorrecto)
- Reducir necesidades de RAM (incorrecto)
- Control de temperatura de hardware (incorrecto)

## 🏗️ 4.2 - Marco de Referencia del Gobierno de Datos

### Áreas de Actividad Clave
1. **Modelado y Diseño de Datos:** Creación de modelos lógicos y su implementación
2. **Almacenamiento y Operación:** Mecanismos de almacenamiento, despliegue y administración de cargas
3. **Seguridad de Datos:** Políticas, estándares, auditorías y cumplimiento regulatorio
4. **Integración e Interoperabilidad:** Arquitecturas y estándares para compartir datos entre sistemas
5. **Gestión de Documentos y Contenido:** Políticas para documentar datos durante su ciclo de vida
6. **Data Warehousing & Business Intelligence:** Arquitecturas para reportes y análisis empresarial
7. **Metadatos:** Modelos que incluyen descripción técnica y de negocio
8. **Calidad de Datos:** Perfilado, políticas y monitorización de calidad
9. **Arquitectura de Datos:** Diseño de estructuras lógicas y físicas de sistemas

**Actividades NO relacionadas:**
- Optimización de microprocesadores
- Control de temperatura de componentes
- Monitorización de funciones de red

## 👥 4.3 - Roles en el Gobierno de Datos

### Roles Principales

#### **Chief Data Officer (CDO)**
- **Perfil:** Ejecutivo con función transversal (negocio y TI)
- **Responsabilidades:**
  - Definir estrategia de datos con el consejo de gobierno
  - Establecer cómo se gestionarán los datos
  - Responsable del modelo de datos
  - Asesorar y supervisar

#### **Oficina de Gobierno del Dato**
- **Función:** Apoyar al CDO
- **Actividades:** Redacción de políticas, medidas de mejora, coordinación con TI

#### **Data Owners (Propietarios del Dato)**
- **Perfil:** Negocio (no TI)
- **Características:** Responsables de departamentos que usan/producen datos
- **Responsabilidades:** Definir objetivos de calidad
- **Distribución:** Generalmente uno por dominio o departamento

#### **Data Stewards (Administradores del Dato)**
- **Perfil:** Negocio
- **Responsabilidades:** Implementar políticas y procesos definidos
- **Funciones adicionales:** Identificar problemas y necesidades
- **Distribución:** Entre 1 y 3 por dominio

#### **Data Custodians (Custodios del Dato)**
- **Perfil:** TI
- **Responsabilidades:** Atender peticiones tecnológicas de los propietarios
- **Función:** Punto de contacto del CDO con la tecnología
- **Distribución:** Uno por sistema

### Verificación de Roles
- ✅ **Data Owner:** Responsable departamental que usa/produce datos (NO ejecuta la gestión)
- ✅ **Data Custodian:** Atiende peticiones tecnológicas de propietarios
- ❌ **CDO:** NO implementa políticas (las define y supervisa)
- ✅ **Data Steward:** SÍ implementa políticas y procesos definidos

---

**Resumen Ejecutivo (100 palabras):** El Gobierno de Datos es un componente esencial de la Gestión de Datos, enfocado en establecer políticas, roles y procedimientos para tratar los datos como activos valiosos. Sus objetivos incluyen asegurar calidad, seguridad, privacidad y cumplimiento normativo, abarcando áreas como modelado, almacenamiento, integración y arquitectura de datos. Se implementa mediante roles especializados: CDO (estrategia), Data Owners (negocio), Data Stewards (implementación) y Data Custodians (soporte técnico). Este marco garantiza que el ciclo de vida de los datos esté controlado y que las organizaciones obtengan máximo valor de sus datos, diferenciándose claramente de actividades técnicas específicas como optimización de hardware.

​
