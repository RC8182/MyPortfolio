FROM node:20.5.1-alpine3.18

WORKDIR /app

COPY . .

RUN chown -R node:node /app
USER node

RUN npm install && \
    npm install tailwindcss postcss autoprefixer && \
    npx tailwindcss init -p && \
    npm run build

EXPOSE 3000

CMD ["npm", "start"]
