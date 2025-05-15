import express from 'express';
import {userLogin, userSignup,usernameController, searchController} from './controller.js';
import router from './route.js';

const app = express();

const PORT = 3000;

// DEFINE a simple route

app.get('/', (req, res) => {
  res.send('Hello Express!!!!!');
})

app.get('search', searchController);

// query a string

app.use('/user', router);

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})