export const getRemoteMessages = () => {
  return fetch('http://localhost:3001/messages')
  .then((e) => e.json())
}

export const addRemoteMessage = message => fetch('http://localhost:3001/message', {
    body: JSON.stringify({text: message}),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
  })
  .then(response => response.json())
