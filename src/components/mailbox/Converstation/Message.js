import React, {Component} from 'react';
// import MessageStore from '../../stores/MessageStore';
import * as MessageActions from '../../../actions/MessageActions';

class Message extends Component {
  state = {
    message: "",
    chat:{
      chatroomID: '',
    },
    info:'',
  };

  componentWillMount(){
    this.setState({info:this.props.info});
  }
  componentDidMount(){
    
  }
  handleMessageChange = (e) => {
    this.setState({message: e.target.value});

    //Change the status to updating.
    if (this.state.message.length > 0) {
      let message = {
        type : 'typing',
        text : this.state.message
      }
        MessageActions.updateMessage(message);
    }
  }

  //Handle Message Submit
  handleMessageSubmit = (e) => {
    e.preventDefault();
    if (this.state.message.length > 0) {
      // this.props.handleMessageSubmit(this.state.message);

      //Emit the message
      MessageActions.sendMessage(this.state);
      //Clear the state.
      this.setState({message: ''});
    }
  }

  displayMessages(){
    
    if (this.props.message === ''){
      return 'Bro you dont have any Conversations';
    }else if(this.props.message.last_message === ''){
      return `Start a new conversation with ${this.props.message.name}`;
    }
    return this.props.message.last_message;
  }
  render() {
    return (
    <div className="mailbox-message">
      <div className="header">
        {this.props.message.id}
      </div>
      <div className="content">
        {this.displayMessages() }
      <div className="footer">
        <form onSubmit={this.handleMessageSubmit}>
          <input type="text" placeholder="Enter your message" value={this.state.message} onChange={this.handleMessageChange} name="message"/>
          <button>Submit</button>
        </form>
      </div>
    </div>
    </div>
    );
  }
};
export default Message;
