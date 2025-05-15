import express from 'express';
import {userLogin, userSignup,usernameController, searchController} from './controller.js';
import router from './route.js';

const app = express();

app.use(express.json());

const PORT = 3000;

// DEFINE a simple route

app.get('/', (req, res) => {
  res.send('Hello Express');
})

app.get('search', searchController);

// query a string

app.use('/user', router);

app.use(express.json());

app.post('/users', (req, res)=>{
  const {name, email} = req.body
  res.json({
    message: `User ${name} with email ${email} created successfully`
  })
})

app.put('/users/:id', (req, res)=>{
  const userId = req.params.id;
  const {name, email} = req.body
  res.json({
    message: `User ${userId} updated to${name}, ${email}`
  })
})

app.delete('/users/:id', (req, res)=>{
  const userId = req.params.id;
  res.json({
    message: `User ${userId} deleted successfully`
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})