const express = require('express');
const app = express();

const authRoutes = require('./routes/auth-routes');

// set up view engine
app.set('view engine', 'ejs');

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
