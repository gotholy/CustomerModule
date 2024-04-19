FROM node:alpine
WORKDIR /app
EXPOSE 9999
COPY . .
RUN npm i 
CMD ["node", "--watch", "app.js"]
