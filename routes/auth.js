const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  res.redirect('/');
});

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;
