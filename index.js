import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://oleg28082003:Jktu80171691866Jktu@cluster0.gcmqsvl.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('DB OK').catch((err) => {
      console.log('DB error: ' + err);
    });
  });

const app = express();

app.use(express.json());

app.post('/auth/register', (req, res) => {});

app.listen(4444, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Server OK');
});
