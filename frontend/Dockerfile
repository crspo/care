# Stage 1: Build Angular app
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine


# Copy Angular build and custom Nginx config
COPY --from=builder /app/dist/temp-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Optional: expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

