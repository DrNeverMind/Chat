import React, {Component} from 'react';

class Inbox extends Component {
  state = {
    'users': []
  }

  componentWillMount() {
    this.setState({users: this.props.inboxUsers});
  }

  render() {
    var displayUsers = this.state.users.map((item) => {
     
  //  @TODO a bit more elegant
      
      return (<li key={item.id} className="inbox-user">
        <a href="/" role="button" onClick={this.props.changeActiveChat} data-cid={item.id}>
          {item.name}
        </a>
      </li>);
    });
    return (<div className="inbox">
      <ul className="inbox-users">
        {displayUsers}
      </ul>
    </div>);
  }
}

export default Inbox;
