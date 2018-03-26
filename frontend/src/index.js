import React, { Component } from 'react';
import { render } from 'react-dom';

const Messages = ({ history }) => {
  return history.map((message, idx) => <div key={idx}>{message}</div>)
}

const getRemoteMessages = () => {
  return fetch('http://localhost:3001/messages')
  .then((e) => e.json())
}

const addMessage = message => fetch('http://localhost:3001/message', {
    body: JSON.stringify({text: message}),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
  })
  .then(response => response.json())

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentMessage: '', messageHistory: []}
  }

  componentWillMount() {
    getRemoteMessages()
      .then(remoteMessages => this.setState({messageHistory: remoteMessages}))
  }

  onChange = (e) => {
    this.setState({currentMessage: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    addMessage(this.state.currentMessage)
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

render(<App />, document.getElementById('root'))
