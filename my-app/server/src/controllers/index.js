const express = require('express');
const router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Home page');
});

// About page route.
router.get('/about', function (req, res) {
  res.send('About page');
});

// Services page route.
router.get('/services', function (req, res) {
  res.send('Services page');
});

// Projects page route.
router.get('/projects', function (req, res) {
  res.send('Projects page');
});

// Contact page route.
router.get('/contact', function (req, res) {
  res.send('Contact page');
});

// Blog page route.
router.get('/blog', function (req, res) {
  res.send('Blog page');
});

module.exports = router;