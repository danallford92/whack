import React, { Component } from 'react';
import { render } from 'react-dom';
import Messages from './messages'
import { getRemoteMessages, addRemoteMessage }  from './messages/api'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentMessage: '', messageHistory: []}
  }

  componentWillMount() {
    this.props.getRemoteMessages()
      .then(remoteMessages => this.setState({messageHistory: remoteMessages}))
  }

  onChange = (e) => {
    this.setState({currentMessage: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addRemoteMessage(this.state.currentMessage)
    .then(history => this.setState({
      currentMessage: '',
      messageHistory: history
    }))
  }

  render() {
    return (<div>
      <Messages history={this.state.messageHistory}/>
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.currentMessage} onChange={this.onChange}/>
      </form>
    </div>)
  }
}

render(<App getRemoteMessages={getRemoteMessages} addRemoteMessage={addRemoteMessage}/>, document.getElementById('root'))
