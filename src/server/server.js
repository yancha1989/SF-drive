const express = require ('express');
const app = express();
let users = [
  {
    name: 'Jhon'
  },
  {
    name: 'Alex'
  },
  {
    name: 'Ivan'
  }
]
app.get('/users', (req, res)=>{
  res.send(users)
})
app.get('/users/:id', (req, res)=> {
  const id = req.params.id;
  const sorting = req.query
  res.send (`You have reserve data on User #${id} with ${sorting}`)
})
app.post('/', (req, res)=>{
  users = users.contact(req.body);
  res.send(users)
})
app.listen(8080, () => console.log("Server started!"))

