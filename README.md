REST service for docker testing

Run nativ
node ./server.js

Run on docker
docker build -t  coding_challange_api .
docker run -it -p 8080:8080 coding_challange_api
