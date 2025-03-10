FROM node:20
LABEL authors="pavlostrelnykov"

WORKDIR /app
  
COPY package*.json ./
  
RUN yarn install
  
COPY . .
  
RUN yarn build
  
CMD ["yarn", "start:dev"]
