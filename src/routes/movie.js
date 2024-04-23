const express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers')

router.get('/', moviesControllers.home)
router.get('/update/:id', moviesControllers.edit)

module.exports = router;