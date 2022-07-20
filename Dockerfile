FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=AishaDB42
ENV POSTGRES_HOST=172.17.0.1
ENV POSTGRES_PORT=5432
ENV POSTGRES_DATABASE=aishacoliving
ENV JWT_SECRET=tommybackend

RUN npm run build

CMD ["node", "dist/main"]