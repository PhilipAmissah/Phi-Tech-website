const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

router.get('/', controller.homePage);
router.get('/about-us', controller.aboutUsPage);
router.get('/services', controller.servicesPage);
router.get('/projects', controller.projectsPage);
router.get('/contact-us', controller.contactUsPage);
router.get('/blog', controller.blogPage);

module.exports = router;