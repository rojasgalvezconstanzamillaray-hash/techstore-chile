# TechStore Chile

Aplicación web responsiva para una tienda virtual de tecnología, desarrollada como proyecto de Programación Front-End. Incluye catálogo dinámico, buscador, categorías, ordenamiento, favoritos, carrito interactivo, modo oscuro, login simulado y una API REST con Node.js, Express, MongoDB y Mongoose.

## Integrante

- Vicente Andrés Piñaleo Purran

## Objetivo

Modernizar la presencia digital de TechStore Chile mediante una interfaz rápida, clara y adaptable a celulares, tablets y computadores. El proyecto deja preparada una base escalable para autenticación, gestión de productos, pedidos y pagos.

## Tecnologías utilizadas

- React 19 y Vite
- HTML5, CSS3 y JavaScript ES6
- Lucide React para iconografía
- Node.js y Express
- MongoDB y Mongoose
- Git y GitHub
- Vitest, Testing Library y Node Test Runner

## Funcionalidades

- Catálogo de 12 productos cargado desde `productos.json`.
- Búsqueda por nombre, categoría o descripción mediante `filter()` y `onChange`.
- Filtro por categoría y ordenamiento por precio o valoración.
- Carrito con contador, cantidades, total y persistencia en `localStorage`.
- Favoritos, modo oscuro y menú móvil.
- Modal de inicio de sesión simulado.
- Toast de confirmación al agregar un producto.
- API REST para productos y pedidos.
- Persistencia de datos mediante MongoDB y Mongoose.
- Diseño responsivo y accesible.

## Estructura del proyecto

```text
techstore-chile/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── css/
│   │   ├── data/productos.json
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── capturas/
├── IA_UTILIZADA.md
└── RUBRICA_CUMPLIDA.md
```

## Instalación

Requisitos: Node.js 20 o superior, npm y MongoDB Community Server. También se puede usar MongoDB Atlas.

1. Clonar o descargar el proyecto.
2. Abrir una terminal en la carpeta raíz.
3. Instalar todas las dependencias:

```bash
npm run install:all
```

4. Copiar `backend/.env.example` como `backend/.env` y configurar `MONGODB_URI`.
5. Iniciar MongoDB y cargar los productos:

```bash
npm run seed
```

6. Abrir dos terminales. En la primera ejecutar:

```bash
npm run dev:backend
```

7. En la segunda ejecutar:

```bash
npm run dev:frontend
```

8. Abrir la dirección indicada por Vite, normalmente `http://localhost:5173`.

La interfaz puede funcionar sin el backend porque el catálogo obligatorio se carga desde el JSON local. La API y MongoDB se ejecutan por separado para demostrar la capa de persistencia.

## API REST

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/health` | Estado del servidor y de MongoDB |
| GET | `/api/products` | Lista productos; permite búsqueda, categoría y orden |
| GET | `/api/products/:id` | Obtiene un producto |
| POST | `/api/products` | Crea un producto |
| PATCH | `/api/products/:id` | Actualiza un producto |
| DELETE | `/api/products/:id` | Elimina un producto |
| POST | `/api/orders` | Registra un pedido y calcula su total |
| GET | `/api/orders` | Lista los pedidos registrados |

## Pruebas y compilación

```bash
npm test
npm run build
```

## Publicación en GitHub

Después de crear un repositorio vacío en GitHub, ejecutar desde la raíz:

```bash
git init
git add .
git commit -m "feat: estructura inicial de TechStore"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/techstore-chile.git
git push -u origin main
```

Se recomienda realizar commits separados para estructura, componentes, estilos, backend y documentación. Reemplazar `TU-USUARIO` por el usuario real antes de entregar el enlace.

## Dificultades encontradas

- Mantener sincronizados buscador, categoría y ordenamiento sin duplicar estados.
- Diseñar el carrito para permitir productos repetidos y cantidades editables.
- Adaptar una interfaz con varias barras y tarjetas a pantallas pequeñas.
- Mantener el frontend disponible con JSON y, al mismo tiempo, agregar una API con MongoDB.

Estas dificultades se resolvieron separando responsabilidades en componentes, usando estados derivados con `filter()` y `sort()`, creando utilidades reutilizables y aplicando media queries por puntos de quiebre.

## Conclusión

TechStore Chile cumple los requisitos funcionales y técnicos del encargo. La componentización facilita el mantenimiento, React permite actualizar la interfaz sin recargar la página y la API con MongoDB entrega una base concreta para incorporar administración, autenticación y pagos en futuras versiones.

