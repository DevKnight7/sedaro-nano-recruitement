FROM ubuntu:20.04
FROM jupyter/base-notebook

USER root

WORKDIR /usr/src/app/satellite-trajectory

COPY satellite-trajectory/package.json .

RUN npm install

COPY satellite-trajectory/public ./public

COPY satellite-trajectory/src ./src

WORKDIR /usr/src/app

COPY sim.ipynb .

RUN jupyter nbconvert --to python sim.ipynb

RUN python sim.py

RUN cp data.js ./satellite-trajectory/src

EXPOSE 3000

WORKDIR /usr/src/app/satellite-trajectory

CMD ["npm", "start"]