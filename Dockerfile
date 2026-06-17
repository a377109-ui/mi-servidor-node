# 1. Usamos una imagen oficial ligera de Node.js
FROM node:18-alpine

# 2. Creamos y definimos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de configuración de dependencias
COPY package*.json ./

# 4. Instalamos las dependencias (en este caso está vacío, pero es buena práctica)
RUN npm install

# 5. Copiamos el resto de los archivos del proyecto (incluyendo documento.txt)
COPY . .

# 6. Exponemos el puerto que usa nuestro servidor asíncrono
EXPOSE 3002

# 7. Comando para arrancar la aplicación
CMD ["npm", "start"]