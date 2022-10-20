FROM node:14.17.3-alpine3.14 as Builder
WORKDIR /app
COPY . .
RUN yarn 
EXPOSE 8080:8080
CMD ["yarn", "start"]