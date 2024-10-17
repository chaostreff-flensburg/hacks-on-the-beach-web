FROM denoland/deno:alpine as builder

# chache lume builder for future builds
WORKDIR /app
ADD deno.json ./\
    deno.lock ./\
    build.ts ./
RUN deno cache build.ts

# build site
ADD . .
RUN deno task build


# build nginx webserver
FROM nginx:alpine

EXPOSE 8080

COPY ./docker/frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site/ /var/www/html/

HEALTHCHECK --interval=5m --timeout=3s CMD curl --fail http://localhost:8080/ || exit 1