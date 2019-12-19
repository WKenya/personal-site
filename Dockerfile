# FROM ngix:1.16
FROM node:lts

WORKDIR /usr/src/personal-site
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@8.3.19

COPY . .

CMD ng serve --host 0.0.0.0
