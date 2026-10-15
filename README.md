# Espejo C

> *Tu proceso, tu identidad, tu proyección.*

Prototipo de app móvil (PWA) para estudiantes de **Comunicación Publicitaria**: un diario reflexivo para conocerse, registrar experiencias y construir su marca personal semestre a semestre.

## Cómo probarla

- **Local:** abre `index.html` en el navegador (no necesita compilación).
- **Como app instalable:** publícala con GitHub Pages (Settings → Pages → rama `main`, carpeta raíz). Con HTTPS se activan el service worker, el modo sin conexión y la opción "Agregar a pantalla de inicio".

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Toda la app: estilos, pantallas y lógica (HTML + CSS + JS sin frameworks) |
| `manifest.json` | Metadatos para instalarla como app (nombre, colores, íconos) |
| `sw.js` | Service worker: caché "red primero" para uso sin conexión y recepción de notificaciones push |
| `icon-192.png`, `icon-512.png` | Íconos de la app |

## Funcionalidades

- **Bienvenida y onboarding:** elección de color de tema y de avatar (humano, animal o mascota).
- **Inicio:** racha de días, estrellas, pregunta del día, "Tu ruta" (Conócete → Comunícate → Proyéctate → Destácate → Oriéntate), progreso y resumen semanal.
- **Preguntas guiadas** en 4 categorías: Identidad, Comunicación, Profesión y Proyección.
- **Registrar experiencia:** título, aprendizaje, emoción, fecha y foto (reducida automáticamente).
- **Mi evolución:** línea de tiempo, estadísticas y "Tu espejo te dice" (patrones detectados en lo que escribes).
- **Áreas de la comunicación:** Branding, Digital, Medios, Creatividad y Cuentas, con ejemplos, pasos, glosario y práctica.
- **Perfil:** personalización, recordatorios, exportar a PDF y copia de seguridad / restauración en JSON.

Los datos se guardan **solo en el dispositivo** (`localStorage`).
