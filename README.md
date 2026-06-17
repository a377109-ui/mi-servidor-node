# Práctica: Servidores HTTP y Contenedores en Node.js
**Estudiante:** Rafael Ahumada Velazquez
**Materia:** Programacion para Plataformas Emergentes  

## Descripción
Se desarrolla desde un script básico en Node.js hasta un servidor web asíncrono completamente contenedorizado en Docker.

## Etapas de la Práctica

### 1. Hola Mundo Básico
* **Archivo:** `hola.js`
* **Comando de ejecución:** `node hola.js`
* *Descripción:* Saludo básico por consola para verificar la correcta instalación del entorno de ejecución de Node.js.

### 2. Servidor HTTP Simple
* **Archivo:** `server-basic.js`
* **Puerto:** 3000
* *Descripción:* Creación de un servidor web utilizando el módulo nativo `http`. Responde con un texto "Hola Mundo" directo al navegador.

### 3. Servidor Síncrono (Lectura de Archivos)
* **Archivo:** `server-sync.js`
* **Puerto:** 3001
* *Descripción:* Servidor que lee el archivo `documento.txt` usando `fs.readFileSync()`. Bloquea el hilo de ejecución principal mientras se realiza la lectura.

### 4. Servidor Asíncrono (No Bloqueante)
* **Archivo:** `server-async.js`
* **Puerto:** 3002
* *Descripción:* Servidor que implementa `fs.readFile()` con un callback. Es la arquitectura recomendada para producción, ya que permite atender otras peticiones en paralelo mientras lee el archivo.

### 5. Documentación
* Presente en este archivo `README.md`.

### 6. Dockerfile e Implementación
* **Archivo:** `Dockerfile` y `.dockerignore`
* **Comandos para desplegar:**
  ```bash
  docker build -t mi-servidor-node .
  docker run -p 3002:3002 mi-servidor-node

  