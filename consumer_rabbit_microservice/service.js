var amqp = require('amqplib/callback_api');

  //process.env.RABBIT_HOST=localhost:5672
  amqp.connect('amqp://test:test@10.1.1.113:5672', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'test';
    ch.assertQueue(q, {durable: false});
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
      console.log("Connection succesful");
  });
});
