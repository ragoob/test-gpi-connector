FROM arm32v7/node:10.15
WORKDIR /usr/app
ENV PORT 3000
ADD package.json /usr/app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /usr/app

EXPOSE $PORT

CMD ["npm", "run", "start"]