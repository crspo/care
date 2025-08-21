# Stage 1: Build Angular app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy Angular build output
COPY --from=build /app/dist/care-app/browser /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

