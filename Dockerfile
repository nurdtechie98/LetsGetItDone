FROM node

WORKDIR /app

RUN apt-get update && \
    apt-get -y install git && \
    git clone https://github.com/nurdtechie98/LetsGetItDone.git && \
    apt-get purge -y --auto-remove git && \
    rm -rf /var/lib/apt/lists/* && \
    cd LetsGetItDone && \
    npm i

ENV DB_URI=mongodb+srv://root:qwerty1234@cluster0-va4ny.mongodb.net/test?retryWrites=true&w=majority

EXPOSE 8080

WORKDIR /app/LetsGetItDone

CMD [ "npm","start" ]
