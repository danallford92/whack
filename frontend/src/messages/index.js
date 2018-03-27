import React from 'react';

const Messages = ({ history }) => {
  return history.map((message, idx) => <div key={idx}>{message}</div>)
}

export default Messages;
