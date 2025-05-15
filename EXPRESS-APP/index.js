import express from 'express';

const app = express();

const PORT = 3000;

// DEFINE a simple route

app.get('/', (req, res) => {
  res.send('Hello Express!!!!!');
})

app.get('/about', (req, res) => {
  res.send('About route');
})

app.get('/contact', (req, res) => {
  res.send('Contact route');
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})