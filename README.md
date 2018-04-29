## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run eject](#npm-run-eject)
- [ServerHelper](#Server-Helper)
## Updating to New Releases
Well I haven`t done much yet

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/>

Also runs the server.js which is powered up with nodemon.


## Server Helper
Server Helper class provides functionality which is used all over the index.js of the server, to provide ease of functionality and smooth representation of updateMessage
### getConversationId(senderID, receiverID)
Function that returns a unique md5 string that can be marked as conversationId between those two users. The string is the same based on those 2 ids (even if they switch positions from receiver to sender etc).
