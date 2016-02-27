var amqp = require('amqplib/callback_api');

exports.submitdata = function (req, res) {
   var newMessage = req.body;
   console.log(newMessage)
   //'amqp://localhost:5672'
   amqp.connect('amqp://'+process.env.RABBIT_HOST, function(err, conn) {
        conn.createChannel(function(err, ch) {
            var q = process.env.RABBIT_QUEUE;
            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer(JSON.stringify(newMessage)));
            console.log(" [x] Sent "+newMessage);
            res.send({
                success: true,
            });
        });
   });

}
