FROM arm32v7/node:10.15
WORKDIR /app
ENV PORT 3000
ADD package.json /app/package.json
RUN npm install

ADD . /app

EXPOSE $PORT

CMD ["npm", "run", "start"]