# Hack That Startup V2

Repositorio de la prueba individual.

## Tabla de contenido

* [Uso](#uso)
* [Users](#users)
  * [Model](#model)
  * [Rutas](#rutas)
* [Neas](#neas)
  * [Model](#model)
  * [Rutas](#rutas)
* [Auth](#auth)
## Uso
Clonar el repositorio.
`git clone repo`


Instalar dependencias.
`npm install`


Iniciar el proyecto.

Producción: `npm run start`

Desarrollo: `npm run dev`

Test: `npm run test`

## Users

### Model

Atributos:

* username
* password

### Rutas

* Ver todos los usuarios: GET /api/user/all
* Ver un usuario por id: GET /api/user/:id
* Nuevo usuario: POST /api/user/:id
* Actualizar usuario: PUT /api/user/:id
* Borrar usuario: DELETE /api/user/:id
* Register: POST /api/user/register
* Login: POST /api/user/login

## Neas

### Model

Atributos:

* full_name
* a
* e
* i
* om
* w
* ma

### Rutas

* Ver todos los Neas: GET /api/nea/all
* Ver un Nea por id: GET /api/nea/:id
* Nuevo Nea: POST /api/nea/:id
* Actualizar Nea: PUT /api/nea/:id
* Borrar Nea: DELETE /api/nea/:id

## Auth

La autentificación se realiza mediante Passport y JWT. En las rutas protegidas, el Authorization header con un token tipo Bearer es requerido para acceder.

De momento, el uso de sesiones se ha ignorado a causa de la ausencia del uso de las rutas protegidas.