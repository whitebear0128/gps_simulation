# client/Dockerfile

# Step 1: Build React app
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
