# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
RUN cd /app/example
RUN npm install
RUN npm run build
RUN pwd
RUN ls -la

# production environment
FROM nginx:stable-alpine
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=build /app/example/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
