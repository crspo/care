# Stage 1: Build the Angular application
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build for production
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application with NGINX
FROM nginx:1.21-alpine
# Copy the custom NGINX configuration file.
# This file will tell NGINX where to find your Angular app's files.
# It replaces the default NGINX config.
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app from the 'build' stage
# Make sure the path matches your project's output directory
# 'your-app-name' is usually the name of your Angular project in angular.json
COPY --from=build /app/dist/temp-angular /usr/share/nginx/html

# Expose port 80 and run NGINX in the foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
