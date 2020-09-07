FROM node:12-alpine
WORKDIR /npopio
COPY . .
RUN npm install --production
CMD ["node", "./server.js"]