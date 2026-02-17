# Pagina web de Encriptación/Desencriptación

Pagina web para encriptado y desencriptado de texto.

## Estructura del Proyecto

```
enc-dec-front/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── decrypt-message/ #Vista para desencriptar la informaciòn
│   │   │   │   ├── decrypt-message.component.html
│   │   │   │   ├── decrypt-message.component.scss
│   │   │   │   ├── decrypt-message.component.spec.ts
│   │   │   │   └── decrypt-message.component.ts
│   │   │   └── encrypt-message/ #Vista para encriptar la informaciòn
│   │   │       ├── encrypt-message.component.html
│   │   │       ├── encrypt-message.component.scss
│   │   │       └── encrypt-message.component.ts
│   │   ├── core/
│   │   │   ├── domain/
│   │   │   │   ├── models/ # Contiene las interfaces
│   │   │   │   │   ├── decrypt-message.model.ts
│   │   │   │   │   └── message.model.ts
│   │   │   │   └── repository/ #  Conexion entre el servicio y los casos de uso
│   │   │   │       ├── decrypt-message.repository.ts
│   │   │   │       └── message.repository.ts
│   │   │   └── infrastructure/
│   │   │       └── api/ #Servicios para encriptar y desencriptar
│   │   │           ├── decrypt-message-http.repository.ts
│   │   │           └── message-http.repository.ts
│   │   ├── use-cases/ #Casos de uso
│   │   │   ├── send-encrypt-message.usecase.ts
│   │   │   └── send-message.usecase.ts
│   │   ├── shared/
│   │   │   └── models/ #Interfaces de las vistas
│   │   │       ├── decrypt-http-message.model.ts
│   │   │       └── DialogData.model.ts
│   │   ├── app.component.html #Componente principal
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── img/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
```

## Descargar

1. Clonar el repositorio:
```bash
git clone https://github.com/MiguelAngel12314/enc-dec.git
```
2. Abrir proyecto:
```bash
cd enc-dec
```
3. Cambiar de branch:
```bash
git checkout enc-dec-front
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

## Desarrollo

Ejecutar servidor en modo desarrollo:
```bash
ng serve
```