# Microservices: nodejs rabbitmq consumer and producer

Simple project to run two services coded in nodejs which exchange messages throught rabbitmq.

**1.** run npm install

**2.** set environment variables 

* process.env.RABBIT_HOST: ip and port where is located rabbit mq. e.q localhost:5672'
* process.env.RABBIT_QUEUE: queue to exchange messages
          
**3.** run service.js in each folder

**4.** send json post to localhost:3001/data
