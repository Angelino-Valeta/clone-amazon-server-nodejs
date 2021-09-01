const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config/config')
const cors = require('cors')

const databasUrl = config.database;

mongoose.connect(databasUrl, (err) => {
  if(err){
    console.log(err)
  }
  console.log('Conneted to the database');
});

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

const PORT = config.port

app.listen(PORT, () => {
  console.log('Server running on port ', PORT)
})
