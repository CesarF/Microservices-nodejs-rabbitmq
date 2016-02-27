var amqp = require('amqplib/callback_api');

  console.log()
  //localhost:5672
  amqp.connect('amqp://'+process.env.RABBIT_HOST, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = process.env.RABBIT_QUEUE;
    ch.assertQueue(q, {durable: false});
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});
