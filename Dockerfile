FROM node:6.11
MAINTAINER "Dario Diaz <darioo.diaz1@gmail.com>"
VOLUME ['/source']
COPY ./package.json ./package-lock.json /source/
WORKDIR /source
RUN npm install --loglevel error -g @angular/cli && npm --loglevel error install
EXPOSE 4200
CMD ['ng', 'serve']