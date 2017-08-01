FROM node:8

WORKDIR /app

COPY . /app

ENV PATH=node_modules/.bin:$PATH

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "-H", "0.0.0.0"]
