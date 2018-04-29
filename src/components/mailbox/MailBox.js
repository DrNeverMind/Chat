import React, { Component } from 'react';
import Inbox from './Inbox/Inbox';
import Message from './Converstation/Message';

class MailBox extends Component {
    state = {
        'activeChat': 0,
        'activeConversation': '',
    }

    componentWillMount() {  
        if(typeof this.props.mailboxUsers !== 'undefined'){
            let active = this.props.mailboxUsers.find(user => {
                return user.isRead;
            });
            this.setState({activeChat: active.id});
            window.location.hash = active.id;
        }
    }

    componentDidMount() {
        this.getConversation(this.state.activeChat);
    };

    getConversation = (id) => {
        let users = Array.from(this.props.mailboxUsers);
        users.map(message => {   
            //Id passed as string so conversion is necessary.
            if (Number(message.id) === Number(id)) {
                this.setState({
                    activeConversation: message
                });
            }
            return true;
        });
    };

    handleActiveChat = (e) => {
        e.preventDefault();
        this.setState({activeChat: e.target.dataset.cid});
        this.getConversation(e.target.dataset.cid);
        // window.location.hash = '#'+ e.target.dataset.cid;
        console.log(this.state.activeChat);
        
    };

    render() {
        return (<div className="container mailbox ">
            <h1 className="text-center">This is my mailbox</h1>
            <div className="mailbox-container clearfix">
                <Inbox
                    inboxUsers={this.props.mailboxUsers}
                    changeActiveChat={this.handleActiveChat}/>
                <Message message={this.state.activeConversation}
                info={this.state.activeChat}/>
            </div>
        </div>)
    }
}

export default MailBox;
