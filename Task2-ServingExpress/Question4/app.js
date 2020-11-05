const express = require('express');
const states = require('./dummyData');
console.log(states);

const app = express();

app.use(express.json());

const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  const stateArr = states;
  res.send(stateArr);
  console.log(stateArr);
});

app.post('/add/state', (req, res) => {
  const newState = req.body;
  const stateArr = states;
  stateArr.push(newState);
  res.send(stateArr);
});

// // app.put('/update/state', (req, res) => {
// //     states.forEach(state => {
// //         if (states.indexOf(state) )
// //     })
// // })

app.delete('/delete/state/:id', (req, res) => {
  const stateToRemove = req.params.id;
  states.splice(stateToRemove, 1);
  res.send(states);
});

app.listen(PORT, () => {
  console.log('The server is running on PORT ' + PORT);
});
