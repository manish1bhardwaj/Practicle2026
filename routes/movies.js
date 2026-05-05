const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('movies/index', { movies: [], user: null });
});

router.get('/new', (req, res) => {
  res.render('movies/new');
});

router.get('/:id', (req, res) => {
  res.render('movies/show', { movie: {} });
});

router.get('/:id/edit', (req, res) => {
  res.render('movies/edit', { movie: {} });
});

router.post('/', (req, res) => {
  res.redirect('/movies');
});

router.put('/:id', (req, res) => {
  res.redirect('/movies');
});

router.delete('/:id', (req, res) => {
  res.redirect('/movies');
});

module.exports = router;
