# FindJob_REACT

Aplicación web para registro y consulta de ofertas de trabajo, desarrollada con React y Material UI.

## Características

- Registro de ofertas laborales mediante formulario.
- Consulta de ofertas disponibles en formato de tarjetas.
- Consumo de API REST para crear y listar ofertas.
- Navegación entre páginas usando React Router.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/FindJob_REACT.git
   cd FindJob_REACT
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

- Accede a la ruta `/` para registrar una nueva oferta de trabajo.
- Accede a la ruta `/offers` para ver las ofertas disponibles.

## Estructura del proyecto

- `src/components/FormularioOffer.jsx`: Formulario para crear ofertas.
- `src/components/Offers.jsx`: Listado de ofertas.
- `src/components/CardOffer.jsx`: Tarjeta individual de oferta.
- `src/services/offer.js`: Funciones para consumir la API.
- `src/data/lists.json`: Listas de cargos y requisitos.

## Requisitos

- Node.js y npm instalados.
- Backend corriendo en `http://localhost:3005/api` (verifica la configuración en `src/services/offer.js`).

## Tecnologías

- React
- Material UI
- React Router

## Autor

- [Julián Gómez](https://github.com/julpygo)

## Licencia

Este proyecto está bajo la licencia MIT.