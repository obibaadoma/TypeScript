import express from 'express';

const app = express();

const PORT = 3000;

app.use('/welcome',(req, res, next) =>{
  console.log(`A new request received at ${Date.now()}`);
  next();
})

// DEFINE a simple route

app.get('/', (req, res) => {
  res.send('Hello Express');
})

app.get('/welcome',(req, res) =>{
  res.send('Welcome to Express');
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})