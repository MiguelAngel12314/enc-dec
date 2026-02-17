# Servidor de Encriptación/Desencriptación

Servidor Express con TypeScript para encriptación y desencriptación RSA.

## Estructura del Proyecto

```
src/
├── config/
│   └── server.ts           # Configuración del servidor
├── controllers/
│   └── encryptionController.ts  # Controlador de lógica de encriptación
├── utils/
│   └── encryption.ts       # Funciones de encriptación/desencriptación
├── routes/
│   └── encryption.ts       # Rutas de la API
├── middleware/
│   └── errorHandler.ts     # Manejador de errores y errores 404
├── auth/
│   └── service.ts          # Servicio de autenticación (carga de claves)
├── security/
│   └── generate.public.ts  # Generación de claves públicas
└── index.ts                # Punto de entrada principal

```
## Descargar

1. Clonar el repositorio:
```bash
git clone
```
2. Abrir proyecto:
```bash
cd enc-server
```
3. Cambiar de branch:
```bash
git checkout development
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```
2. Agregar llave privada:
```bash
copiar el archivo .pem en la siguiente ruta src/auth
```

## Desarrollo

Ejecutar servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

