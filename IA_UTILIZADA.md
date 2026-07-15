# Registro de Inteligencia Artificial utilizada

## Herramienta

| Herramienta | Uso durante el proyecto |
| --- | --- |
| ChatGPT (Codex) | Apoyo en la planificación, explicación de React, propuesta de componentes, revisión de estilos responsivos, creación de pruebas, documentación y detección de errores. |

La IA se utilizó como herramienta de apoyo. El código fue organizado, revisado y adaptado al mockup y a la rúbrica del proyecto. Se verificaron los flujos principales mediante pruebas automatizadas y revisión visual.

## Prompts relevantes

### Prompt 1

> Desarrolla una tienda virtual de tecnología con React y Vite, separada en componentes Navbar, Header, Banner, ProductList, ProductCard, Sidebar, Footer, SearchBar y Cart. Los productos deben cargarse desde un JSON.

**Uso:** sirvió para definir la primera estructura del frontend y las responsabilidades de cada componente.

**Modificaciones realizadas:** se agregaron componentes auxiliares, accesibilidad, persistencia local y una jerarquía de carpetas más profesional.

### Prompt 2

> Explícame cómo manejar un carrito con useState, permitiendo agregar el mismo producto, cambiar cantidades y calcular el total.

**Uso:** se aplicó para diseñar las funciones `addToCart`, `updateQuantity` y `removeFromCart`.

**Modificaciones realizadas:** se añadió almacenamiento en `localStorage`, límites de cantidad y cálculo mediante `reduce()`.

### Prompt 3

> Crea un buscador de productos con React usando onChange y filter(), compatible con categorías y orden por precio.

**Uso:** orientó el filtrado combinado que se realiza en `App.jsx`.

**Modificaciones realizadas:** se normalizaron los textos con minúsculas y se añadió búsqueda por nombre, descripción y categoría.

### Prompt 4

> Genera estilos CSS responsivos similares a un e-commerce tecnológico azul y violeta, con tarjetas modernas, menú móvil y modo oscuro.

**Uso:** se utilizó como base para el sistema de colores, tarjetas, puntos de quiebre y estados hover/focus.

**Modificaciones realizadas:** los estilos se ajustaron al mockup entregado, se mejoró el contraste y se evitó que los controles se desbordaran en 360 px.

### Prompt 5

> Diseña una API REST con Node.js, Express, MongoDB y Mongoose para almacenar productos tecnológicos y pedidos.

**Uso:** sirvió para definir modelos, controladores, rutas, validación y manejo centralizado de errores.

**Modificaciones realizadas:** se agregó un endpoint de salud, cálculo seguro de totales, validación de IDs y un script de carga inicial.

### Prompt 6

> Revisa el proyecto contra una rúbrica que evalúa props, useState, JSON, map, filter, onClick, onChange, backend, MongoDB, responsive y documentación.

**Uso:** se empleó como lista de verificación final.

**Modificaciones realizadas:** se añadieron pruebas, documentación de evidencia y mensajes vacíos cuando no hay coincidencias.

## Reflexión

La IA aceleró tareas repetitivas y ayudó a detectar omisiones, pero fue necesario revisar cada propuesta para asegurar que respondiera al encargo. Las decisiones importantes -estructura, experiencia de usuario, validaciones y adaptación al mockup- se ajustaron de forma consciente. El principal aprendizaje fue que una respuesta generada no reemplaza la comprensión: para explicar el proyecto es importante dominar el flujo de props, estados, eventos, renderizado y conexión con la base de datos.

