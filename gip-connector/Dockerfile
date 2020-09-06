FROM arm32v7/node:10.15
WORKDIR /app
ENV PORT 3000
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]