const router = require('express').Router();
const passport = require('passport');

//auth login

router.get('/login', (req, res) => {
  res.render('login');
});

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport
  res.send('loggin out');
});

// auth with google, send to consent screen
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

//callback route for google to redirect to, exchange code with profile
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('You reached callback uri');
});

module.exports = router;
