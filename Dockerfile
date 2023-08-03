FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ARG configuration=production
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/finsweet /usr/share/nginx/html

EXPOSE 80