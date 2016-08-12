FROM node
MAINTAINER hugo queiros <hugofqueiros@gmail.com>

RUN mkdir -p /data
WORKDIR /data

COPY package.json /data
RUN npm set progress=false
RUN npm install
COPY . /data

ENV NODE_ENV development

EXPOSE 8000
CMD ["npm", "start"]
