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

# The new, critical step: Remove default NGINX files
# This ensures that NGINX's welcome page is gone.
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the 'build' stage
# This now copies into an empty directory
COPY --from=build /app/dist/your-app-name /usr/share/nginx/html

# Copy the custom NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 and run NGINX in the foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
