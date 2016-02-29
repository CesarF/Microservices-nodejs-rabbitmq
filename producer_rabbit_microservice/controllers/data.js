var amqp = require('amqplib/callback_api');

exports.submitdata = function (req, res) {
   var newMessage = req.body;
   console.log(newMessage)
   //'amqp://localhost:5672'
   amqp.connect('amqp://test:test@10.1.1.113:5672', function(err, conn) {
        conn.createChannel(function(err, ch) {
            var q = 'test';
            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer(JSON.stringify(newMessage)));
            console.log(" [x] Sent "+newMessage);
            res.send({
                success: true,
            });
        });
   });

}
