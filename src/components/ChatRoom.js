import React from 'react';

export default function ChatRoom(props){
    return(
      <div>
        {
          props.messages.map(message => {
            return <li key={message}> {message} </li>;
          })
         }
      </div>
    );
};
