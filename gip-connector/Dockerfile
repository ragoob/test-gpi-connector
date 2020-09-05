FROM node:12.13-alpine
WORKDIR /app
ENV PORT 3000
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /app

EXPOSE $PORT

CMD ["npm", "run", "start"]