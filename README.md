# TP2 - Trabajo Integrador: API REST de Películas 🎬

Este proyecto fue desarrollado como parte del trabajo integrador final de la materia **Taller de Programación 2**. Consiste en una API REST construida con Node.js y Express, conectada a una base de datos MongoDB, que permite gestionar usuarios y películas, incluyendo autenticación mediante JWT y la integración de una API externa para alimentar la base de datos.

---

## 📚 Contenidos

- [TP2 - Trabajo Integrador: API REST de Películas 🎬](#tp2---trabajo-integrador-api-rest-de-películas-)
  - [📚 Contenidos](#-contenidos)
  - [🧰 Tecnologías utilizadas](#-tecnologías-utilizadas)
  - [🛠 Instalación y uso](#-instalación-y-uso)
    - [1. Clonar el repositorio](#1-clonar-el-repositorio)
    - [2. Instalar dependencias](#2-instalar-dependencias)
    - [3. Configurar las variables de entorno](#3-configurar-las-variables-de-entorno)
    - [4. Iniciar el servidor](#4-iniciar-el-servidor)
  - [📁 Estructura del proyecto](#-estructura-del-proyecto)
  - [🔗 Endpoints](#-endpoints)
    - [Usuarios](#usuarios)
    - [Películas](#películas)
  - [🔐 Autenticación JWT](#-autenticación-jwt)
  - [🧪 Testing](#-testing)
    - [Ejecutar los tests](#ejecutar-los-tests)
  - [📌 Ejemplos de uso](#-ejemplos-de-uso)
    - [🧑 Usuarios](#-usuarios)
      - [📥 Crear usuario](#-crear-usuario)
      - [🔐 Login de usuario](#-login-de-usuario)
      - [🔎 Obtener todos los usuarios](#-obtener-todos-los-usuarios)
      - [🛠 Actualizar usuario completo](#-actualizar-usuario-completo)
      - [✏️ Actualizar usuario parcial](#️-actualizar-usuario-parcial)
      - [🗑 Eliminar usuario](#-eliminar-usuario)
    - [🎬 Películas](#-películas)
      - [📥 Crear película](#-crear-película)
      - [📄 Obtener todas las películas](#-obtener-todas-las-películas)
      - [🌎 Obtener películas sin token](#-obtener-películas-sin-token)
      - [🇦🇷 Obtener películas nacionales](#-obtener-películas-nacionales)
      - [✏️ Actualizar película completa](#️-actualizar-película-completa)
      - [🩹 Actualización parcial de película](#-actualización-parcial-de-película)
      - [🗑 Eliminar película](#-eliminar-película)
  - [👥 Autores](#-autores)
  - [📌 Notas](#-notas)

---

## 🧰 Tecnologías utilizadas

- **Node.js** – entorno de ejecución
- **Express** – framework de servidor web
- **MongoDB** – base de datos NoSQL
- **dotenv** – manejo de variables de entorno
- **jsonwebtoken** – autenticación mediante tokens JWT
- **joi** – validación de datos
- **mocha / chai / supertest** – testing

---

## 🛠 Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/lucaseche/tp2_trabajo_integrador.git
cd tp2_trabajo_integrador
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Descargar el archivo `.env` provisto y dejarlo en la raíz del proyecto



### 4. Iniciar el servidor

```bash
npm start
```

Modo desarrollo (con recarga automática):

```bash
npm run watch
```

---

## 📁 Estructura del proyecto

```
.
├── README.md                 # Documentación del proyecto
├── package.json              # Dependencias y scripts
├── package-lock.json         # Versión exacta de dependencias
└── src/
    ├── controllers/          # Lógica de los endpoints (usuarios y películas)
    │   ├── movies.controller.js
    │   └── users.controller.js
    ├── index.js              # Punto de entrada del servidor
    ├── middleware/           # Middleware de autenticación
    │   └── auth.js
    ├── models/
    │   ├── DAO/              # Modelos de datos
    │   │   ├── movies.model.js
    │   │   └── users.model.js
    │   └── MongoConnection.js # Conexión a la base de datos MongoDB
    ├── routes/               # Definición de rutas
    │   └── movies.route.js
    ├── services/             # Lógica de negocio
    │   ├── movies.service.js
    │   └── users.service.js
    ├── test/                 # Pruebas automatizadas
    │   └── users.integration.test.js
    └── validations/          # Validaciones de datos
        └── validation.js
```

---

## 🔗 Endpoints

### Usuarios

- `POST /api/users/register` → Registrar nuevo usuario
- `POST /api/users/login` → Login y generación de token JWT
- `GET /api/users` → Obtener todos los usuarios (protegido)
- `GET /api/users/:id` → Obtener un usuario
- `PUT /api/users/:id` → Actualizar usuario
- `DELETE /api/users/:id` → Eliminar usuario

### Películas

- `GET /api/movies` → Listado de películas
- `POST /api/movies` → Crear película (protegido)
- `GET /api/movies/:id` → Obtener película por ID
- `PUT /api/movies/:id` → Actualizar película
- `DELETE /api/movies/:id` → Eliminar película

🛠 Las películas se pueden cargar desde una API externa (completar nombre si aplica).

---

## 🔐 Autenticación JWT

Los endpoints protegidos requieren un token JWT que se debe enviar en el encabezado:

```
Authorization: Bearer <token>
```

El token se obtiene al hacer login (`POST /api/users/login`).

---

## 🧪 Testing

El proyecto incluye pruebas automatizadas con `Mocha`, `Chai` y `Supertest`.

### Ejecutar los tests

```bash
npm test
```

Los tests incluyen:
- Casos exitosos de autenticación y uso de endpoints
- Casos de error (usuarios no válidos, token incorrecto, etc.)

---

## 📌 Ejemplos de uso

A continuación se muestran ejemplos prácticos para probar los endpoints utilizando `curl`. También se pueden probar los endpoints desde Postman.

> 💡 Nota: Los endpoints protegidos requieren el uso de un token JWT en el encabezado:  
> `Authorization: Bearer <tu_token>`

---

### 🧑 Usuarios

#### 📥 Crear usuario

```json
POST /users
Body:
{
  "userName": "juan123",
  "password": "123456",
  "mail": "juan@ort.com"
}
```

```bash
curl -X POST http://localhost:8096/users \
  -H "Content-Type: application/json" \
  -d '{"userName":"juan123","password":"123456", "mail":"juan@ort.com"}'
```

---

#### 🔐 Login de usuario

```json
POST /login
Body:
{
  "userName": "juan123",
  "password": "123456"
}
```

```bash
curl -X POST http://localhost:8096/login \
  -H "Content-Type: application/json" \
  -d '{"userName":"juan123","password":"123456"}'
```

📌 Devuelve:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

#### 🔎 Obtener todos los usuarios

```bash
curl http://localhost:8096/users
```

---

#### 🛠 Actualizar usuario completo

```bash
curl -X PUT http://localhost:8096/users/update/all/<ID> \
  -H "Content-Type: application/json" \
  -d '{"userName":"juan456","password":"nueva123"}'
```

---

#### ✏️ Actualizar usuario parcial

```bash
curl -X PATCH http://localhost:8096/users/update/<ID> \
  -H "Content-Type: application/json" \
  -d '{"password":"nuevoPass"}'
```

---

#### 🗑 Eliminar usuario

```bash
curl -X DELETE http://localhost:8096/user/delete/<ID>
```

---

### 🎬 Películas

> Requieren token en el encabezado:

```http
Authorization: Bearer <tu_token>
```

---

#### 📥 Crear película

```bash
curl -X POST http://localhost:8096/peliculas \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"titulo":"El Secreto de sus Ojos","genero":"Drama","pais":"Argentina"}'
```

---

#### 📄 Obtener todas las películas

```bash
curl http://localhost:8096/peliculas \
  -H "Authorization: Bearer <TOKEN>"
```

---

#### 🌎 Obtener películas sin token

```bash
curl http://localhost:8096/peliculasSinToken
```

---

#### 🇦🇷 Obtener películas nacionales

```bash
curl http://localhost:8096/peliculasNacionales \
  -H "Authorization: Bearer <TOKEN>"
```

---

#### ✏️ Actualizar película completa

```bash
curl -X PUT http://localhost:8096/peliculas/update/<ID> \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Relatos Salvajes","genero":"Comedia Negra","pais":"Argentina"}'
```

---

#### 🩹 Actualización parcial de película

```bash
curl -X PATCH http://localhost:8096/peliculas/update/<ID> \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"genero":"Thriller"}'
```

---

#### 🗑 Eliminar película

```bash
curl -X DELETE http://localhost:8096/peliculas/delete/<ID> \
  -H "Authorization: Bearer <TOKEN>"
```



---

## 👥 Autores

- Joaquín Rougé Núñez
- Patricio Iaccarino
- Sergio Carbajal
- Lucas Echeverria


---

## 📌 Notas

🚫 Este repositorio no incluye la carpeta `node_modules`  
🗂 Solicite el archivo `.env` para poder utilizar correctamente el proyecto
