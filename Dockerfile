# build environment
FROM node:20.8.0-alpine3.17 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ENV NODE_OPTIONS=--openssl-legacy-provider
COPY . /app
RUN yarn install
WORKDIR /app/example
RUN mkdir "build"
#RUN yarn install
#RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=0 /app/example/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
