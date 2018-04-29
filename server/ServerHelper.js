//Crypto nodejs https://nodejs.org/api/crypto.html#crypto_crypto
const crypto = require('crypto');

module.exports = class ServerHelper {

   getConversationId(senderID, receiverID) {
    const users = [
      {
        username: senderID.toString()
      }, {
        username: receiverID
      }
    ];

    users.sort(function(a, b) {
      return (a.username > b.username) - (a.username < b.username);
    });
    return crypto.createHash('md5').update(users[0].username + users[1].username).digest('hex');
  }

  /**
  * @returns object
  */
  prepareMessageStructure(info,uuid){
      return JSON.stringify({
        sender: info.sender,
        receiver: info.receiver,
        message : {
          id : uuid,
          last_message : info.message,
        }
      });
  }
}
