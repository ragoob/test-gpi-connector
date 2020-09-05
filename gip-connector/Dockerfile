FROM arm32v7/node:10.15
WORKDIR /usr/app
ADD package.json /usr/app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]