# Práctica de Servidores en Node.js

Este proyecto es una guía paso a paso para entender el funcionamiento de Node.js, desde un Hola Mundo básico hasta la contenedorización con Docker.

## Archivos del proyecto

* `hola.js`: Saludo básico en consola.
* `server-basic.js`: Servidor HTTP básico.
* `server-sync.js`: Servidor que lee un archivo de forma síncrona (bloqueante).
* `server-async.js`: Servidor que lee un archivo de forma asíncrona (no bloqueante) **(Elegido para producción)**.
* `documento.txt`: Archivo de texto de prueba.

## Cómo ejecutar localmente
Para el servidor principal (asíncrono):
```bash
node server-async.js
---

## 6) Crear Dockerfile e implementar

Para meter nuestra aplicación en un contenedor Docker, primero le diremos qué archivo arrancar por defecto en nuestro `package.json`. Asegúrate de que tenga esta línea en la sección de scripts:

```json
"scripts": {
  "start": "node server-async.js"
}