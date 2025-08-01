# server/Dockerfile

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY . .
RUN npm install

# Expose backend port
EXPOSE 3000

# Run backend
CMD ["node", "server.js"]
