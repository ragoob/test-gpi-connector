FROM arm32v7/node:10.15
WORKDIR /usr/app
ENV PORT 3000
COPY  ./dist/ /usr/app/


EXPOSE $PORT

RUN npm run start:prod