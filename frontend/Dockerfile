FROM node:alpine
WORKDIR /app
EXPOSE 5173
COPY . . 
RUN npm i
CMD ["npm","run","dev","--", "--host"]