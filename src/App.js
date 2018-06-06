import React, { Component } from 'react';
import './App.css';
import * as Api from './api';
import ChatRoom from './components/ChatRoom';
import '../node_modules/jquery/dist/jquery.js';
import './scss/main.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MailBox from './components/mailbox/MailBox';
import * as MessageActions from './actions/MessageActions';
import MessageStore from './components/stores/MessageStore';
// import Login from './components/auth/Login';

class App extends Component {
    state = {
        messages: [],
        users: [],
        isFetching: false,
        login: false,
    }
    componentWillMount() {
        MessageActions.updateContacts();
        MessageStore.on('message_store_change', () => {
            this.setState({
                users: MessageStore.getAll()
            })
        });

        MessageStore.on('contacts_updated', (info) => {

            info.map((item) => {
                return this.setState((prevState) => ({
                    users: prevState.users.concat(JSON.parse(item))
                }))
            })
            this.setState({ isFetching: true });
        });
    }

    //Handle Message Submit
    handleMessageSubmit = (message) => {
        this.setState({
            messages: [...this.state.messages, message]
        });
        // Api.sendMessage('1232','12354',message);
    };

    handleMessageStatus = (status) => {
        Api.updateMessage(status);

    };
    handlethisclick = () => {
        MessageActions.createTestMessage();
    }

    render() {
        return (
            <div className="app">
              
                   { this.state.isFetching ?
                        <MailBox mailboxUsers={this.state.users} /> :
                        <ChatRoom messages={this.state.messages} />
                   }
            </div>
        )
    }
}

export default App;
