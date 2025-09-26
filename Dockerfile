# FROM node:22

# WORKDIR /app

# # copy the pack.json and lock
# COPY  package*.json .
# # install the dependences
# RUN npm ci
# # copy the source code of our app
# COPY src/index.js index.js
# # expose the appli  port
# EXPOSE 3300
# # start application
# CMD ["node", "index.js"]

# Utiliser l'image officielle Node.js 22
FROM node:22

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le code source de l'application
COPY index.js index.js

# Exposer le port utilisé par l'application
EXPOSE 3300

# Lancer l'application
CMD ["node", "index.js"]
