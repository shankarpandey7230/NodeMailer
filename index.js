import express from 'express';

import { updateUserTemplate } from './nodemailer.js';
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({
    message: 'server is running',
    success: true,
  });
});

server.post('/', (req, res) => {
  try {
    console.log(req.body);
    updateUserTemplate();

    res.json({
      message: 'TODO',
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
});

server.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:8000`);
});
