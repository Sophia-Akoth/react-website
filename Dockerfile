# stage1 as builder
FROM node:10-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-website && mv ./node_modules ./react-website

WORKDIR /react-website

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/react-project



# Copy from the stahg 1
COPY ./build /var/www/react-website

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]