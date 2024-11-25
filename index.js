import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.json({
    message: 'server is running',
    success: true,
  });
});

server.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:8000`);
});
