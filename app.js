const express = require('express');
const app = express();
const mongoose = require('mongoose');

const keys = require('./config/keys');

const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

// set up view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

//setup routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

//listen
app.listen(3000, () => {
  console.log('listening for request on port 3000');
});
