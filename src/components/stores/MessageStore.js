import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


class MessageStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }
  sendMessage(information) {
    // this.users.push({id: information.id, name: information.name, last_message: information.message, isRead: false})
    socket.emit('sendMessage', information);
    this.emit('message_store_change');
  }
  updateMessageStatus(information) {
    socket.emit('updateMessage', information.type);
  }

  getConversations(info = null) {
    info.user.id = 12345;
    socket.emit('getConversations', info, (contacts) => {
      this.emit('contacts_updated', contacts);
    });
  }
  getAll(){
    return this.users;
  }
  handleActions(information) {
    switch (information.type) {
      case "SEND_MESSAGE":
        this.sendMessage(information);
        break;
      case "TYPING":
        this.updateMessageStatus(information);
        break;
      case "UPDATE_CONTACTS":
        this.getConversations();
        break;
      default:

    }
  }
}
const messageStore = new MessageStore();
dispatcher.register(messageStore.handleActions.bind(messageStore));
export default messageStore;
