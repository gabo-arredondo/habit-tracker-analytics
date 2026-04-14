# Mapeo de Métricas a Pantallas 

Este documento define qué métricas deben mostrarse en cada pantalla del MVP
con el objetivo de responder preguntas clave del usuario.
No incluye valores concretos ni conclusiones, solo la definición analítica.

---

## 1. Dashboard (Visión General)

### Pregunta que responde
> ¿Cómo voy en general con mis hábitos?

### Métricas que deben mostrarse

- **Promedio de frecuencia semanal de todos los hábitos**
  - Permite evaluar la constancia general.

- **Porcentaje de cumplimiento general**
  - Muestra el nivel global de cumplimiento de hábitos.

- **Número de hábitos activos**
  - Indica cuántos hábitos están actualmente en seguimiento.

- **Nivel global de constancia**
  - Clasificación agregada (bajo / intermedio / alto) calculada a partir
    de la frecuencia semanal promedio.

> El Dashboard ofrece una visión resumida del desempeño general,
> sin entrar en análisis detallado ni comparaciones profundas.

---

## 2. Lista de Hábitos (Comparación)

### Pregunta que responde
> ¿Cuál de mis hábitos va mejor y cuál va peor?

### Métricas que deben mostrarse por hábito

- **Frecuencia semanal del hábito**
  - Número de días en la semana en los que el hábito fue cumplido.

- **Porcentaje de cumplimiento por hábito**
  - Relación entre días cumplidos y días esperados, permitiendo comparar
    hábitos con distintas frecuencias.

- **Nivel de constancia del hábito**
  - Clasificación (bajo / intermedio / alto) basada en la frecuencia semanal.

- **Estado del hábito**
  - Indica si el hábito se encuentra activo o pausado.

> Esta pantalla permite comparar hábitos entre sí y detectar
> cuáles requieren mayor atención, sin explicar aún las causas.

---

## 3. Detalle de Hábito (Análisis Temporal)

### Pregunta que responde
> ¿Cómo ha evolucionado este hábito en el tiempo?

### Métricas que deben mostrarse

- **Registro diario de cumplimiento**
  - Historial día a día de cumplimiento o no cumplimiento del hábito.

- **Frecuencia semanal histórica**
  - Evolución de la frecuencia semanal del hábito a lo largo del tiempo.

- **Porcentaje de cumplimiento por período**
  - Cumplimiento agrupado por semana u otro intervalo temporal.

- **Racha actual del hábito**
  - Número de días consecutivos cumplidos hasta el presente.

- **Racha máxima histórica**
  - Mayor número de días consecutivos cumplidos en el historial.

- **Tendencia general del hábito**
  - Indica si el hábito muestra mejora, estabilidad o descenso en el tiempo.

> El Detalle de Hábito permite un análisis profundo del comportamiento,
> la constancia y la evolución de un hábito específico.

---

## Nota Final

Este mapeo conecta el análisis de datos con las pantallas del producto.
Las conclusiones, valores numéricos e insights se generarán posteriormente
durante la fase de análisis con Pandas y la visualización en Power BI.