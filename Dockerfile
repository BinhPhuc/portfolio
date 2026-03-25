FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]
