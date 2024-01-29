# Practice-server

Bienvenido a Practice-server, un proyecto de servidor desarrollado con Express y TypeScript. Esta aplicación, diseñada para la gestión de usuarios, se conecta a una base de datos MongoDB para ofrecer una solución robusta y escalable.

## Contacto

- **Email:** maximilianovanmegroot@gmail.com
- **LinkedIn:** [Perfil de LinkedIn](https://www.linkedin.com/in/maximilianovanmegroot/)


# Índice

- [Primeros pasos](#primeros-pasos)
- [Usuarios](#usuarios)
  - [Opciones de ocupación](#opciones-de-ocupación)
  - [Crear Usuario](#crear-usuario)
  - [Listado de usuarios](#listado-de-usuarios)
  - [Obtener usuario especifico](#obtener-usuario-especifico)
  - [Actualizar usuario especifico](#actualizar-usuario-especifico)
  - [Eliminar usuario especifico](#eliminar-usuario-especifico)

Volver al [Índice](#índice)

## **Primeros pasos**

### Requisitos

Asegúrate de tener instalados los siguientes requisitos antes de ejecutar la aplicación:

- **NPM**: Versión >= 10.3.0
- **Node.js**: Versión >= 18.19.0
- **MongoDB**: Asegúrate de tener MongoDB instalado y en ejecución.

### Instalación

1. Clona este repositorio:

- ```bash
  git clone https://github.com/MaxiV95/Practice-server
  ```

2. Navega al directorio del proyecto:

- ```bash
  cd Practice-server
  ```

3. Instala las dependencias:

- ```bash
  npm install
  ```

4. Crea un archivo .env con los siguientes parámetros:

- ```env
  PORT=puerto_por_defecto_3001
  MONGO_URL=uri_mongo_db
  DB_NAME=name_mongo_db
  ```

5. Para iniciar la aplicación:

- ```bash
  npm run dev
  ```

La aplicación estará disponible en http://localhost:3001

Volver al [Índice](#índice)

## **Usuarios**

### Opciones de ocupación

- **`GET /user/occupation`** - Obtener opciones de ocupación.
- **Params**:
- **Query**:
- **header**:
- **Body**:
- **Request Body** example: Status **200**
  ```typescript
  {
  	['employee', 'unoccupied'];
  }
  ```

volver al [Índice](#índice)

### Crear Usuario

- **`POST /users`** - Registro de nuevos usuarios.
- **Params**:
- **Query**:
- **header**:
- **Body**:
  ```typescript
  {
    "email": string - required - Correo electrónico del usuario.
    "nickName": string - required - Nombre de usuario.
    "occupation": string - required - Estado de empleado o desempleado
  }
  ```
- **Request Body** example: Status **201**
  ```typescript
  {
    id: "6570bb7db2ad523394706c12",
    email: "maximilianovanmegroot@gmail.com",
    nickName: "MaxiV95",
    occupation: "employee",
  }
  ```

volver al [Índice](#índice)

### Listado de usuarios

- **`GET /users`** - Obtener el listado de todos los usuarios.
- **Params**:
- **Query**:
- **header**:
- **Body**:
- **Request Body** example: Status **200**
  ```typescript
  [
  	{
  		id: '6570bb7db2ad523394706c12',
  		email: 'maximilianovanmegroot@gmail.com',
  		nickName: 'MaxiV95',
  		occupation: 'employee',
  	},
  	// Otros resultados de búsqueda...
  ];
  ```

volver al [Índice](#índice)

### Obtener usuario especifico

- **`GET /users/{:id}`** - Obtener detalles de un usuario específico.
- **Params**:
  ```typescript
  "id": string - required - id del usuario.
  ```
- **Query**:
- **header**:
- **Body**:
- **Request Body** example: Status **200**
  ```typescript
  {
    id: '6570bb7db2ad523394706c12',
    email: 'maximilianovanmegroot@gmail.com',
    nickName: 'MaxiV95',
    occupation: 'employee',
  }
  ```

volver al [Índice](#índice)

### Actualizar usuario especifico

- **`PUT /users/{:id}`** - Actualizar un usuario específico.
- **Params**:
  ```typescript
  "id": string - required - id del usuario.
  ```
- **Query**:
- **header**:
- **Body**:
  ```typescript
  {
    "email": string - optional - Correo electrónico del usuario.
    "nickName": string - optional - Nombre de usuario.
    "occupation": string - optional - Estado de empleado o desempleado
  }
  ```
- **Request Body** example: Status **200**
  ```typescript
  {
    id: '6570bb7db2ad523394706c12',
    email: 'maximilianovanmegroot@gmail.com',
    nickName: 'MaxiV95',
    occupation: 'employee',
  }
  ```

volver al [Índice](#índice)

### Eliminar usuario especifico

- **`DELETE /users/{:id}`** - Eliminar un usuario especifico.
- **Params**:
  ```typescript
  "id": string - required - id del usuario.
  ```
- **Query**:
- **header**:
- **Body**:
- **Request Body** example: Status **200**
  ```typescript
  {
    acknowledged: true,
    deletedCount: 1
  }
  ```

Volver al [Índice](#índice)
