const express = require('express')
const app = express();
const bodyParser = require('body-parser');

let messages = ['hi luke', 'hi Dan'];

app.get('/messages', (req, res) => {
  res.status(200).set('Access-Control-Allow-Origin', '*').send(messages)
})

const allowCrossDomain = (req, res, next) => {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.use(bodyParser.json())

app.post('/message', (req, res) => {
  const message = req.body.text;

  const newMessages = [...messages, message];

  messages = newMessages;

  res.status(200).set('Access-Control-Allow-Origin', '*').send(messages)
})

app.listen(3001, () => console.log('hey from the app'))
