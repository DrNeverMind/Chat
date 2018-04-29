//Socket io.
const io = require('socket.io')();

//Bunyan logging tool
var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: "Chat-App"
});
//Setting Up Redis
var Redis = require('ioredis');
var redis = new Redis();
module.exports.redis = redis;
//uuid
const uuidv1 = require('uuid/v1');
//Server API Helper Functions.
var ServerHelper = require('./ServerHelper.js');
var shelper = new ServerHelper();

io.on('connection', (client) => {

  /**
   * sendMessage function
   * info = object
   */
  client.on('sendMessage', (info) => {
    console.log(info);

    info.sender = 123456;
    let conversationId = shelper.getConversationId(info.sender, info.receiver);
    let information = shelper.prepareMessageStructure(info, uuidv1());
    console.log(conversationId, information);
    // redis.sadd(conversationId, information);
  });
  //
  client.on('pendingMessages', (sender, messages) => {
    // redis.set('pendingMessages-' + sender, messages);
  });

  /**
   * updateMessage function receives and information object.
   * Can be used in the future to display to the receiver dispatcher
   * 'user is typing' feature.
   */
  client.on('updateMessage', (information) => {
    //@DEBUG 
    //log.info(information);
  });

  /**
   * loadConversations function receives info object.
   * uses Redis to get the information of the user.
   */
  client.on('getConversations', (info, callBack) => {
    redis.smembers(info.user.id, function (err, result) {
      callBack(result);
    });
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
