from node:20 as build

workdir /app

copy package.json  ./

run npm install

copy . .

run npm run build

from node:20-alpine

workdir /app

copy --from=build /app/public ./public

RUN mkdir .next

copy --from=build /app/.next/standalone/ ./

copy --from=build /app/.next/static ./.next/static


cmd ["node", "server.js"]