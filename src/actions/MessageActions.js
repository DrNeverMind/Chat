import dispatcher from "../components/dispatcher";

export function sendMessage(info){
  dispatcher.dispatch({
    type: "SEND_MESSAGE",
    info: info,
  });
}

export function deleteMessage(message){
  dispatcher.dispatch({
    type: "DELETE_MESSAGE",
    id : message.id,
  });
}

export function createTestMessage() {
  dispatcher.dispatch({
    type: "SEND_MESSAGE",
    id : Math.floor(Math.random() * Math.floor(10000)),
    sender: Math.floor(Math.random() * Math.floor(10000)),
    receiver: Math.floor(Math.random() * Math.floor(10000)),
    name : Math.random().toString(36).substring(10),
    message:  Math.random().toString(),
  });
}

export function updateMessage(information) {
  dispatcher.dispatch({
    type: "TYPING",
    id : Math.floor(Math.random() * Math.floor(10000)),
    name : Math.random().toString(36).substring(10),
    message:  information.message,
  });
}

export function updateContacts(){
  
  dispatcher.dispatch({
    type: "UPDATE_CONTACTS",
  });
}