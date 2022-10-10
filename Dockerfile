# Dockerfile

# base image (from ecr to avoid dockerhub pull limit PLUS security) 
FROM node:16

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# # install dependencies from package-lock.json
RUN npm ci

# start app
RUN npm run build
EXPOSE 3000

CMD npm run start
