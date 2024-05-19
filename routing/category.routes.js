const express = require('express');
const router = express.Router();
const categoriesController = require('../controller/categories.controller');

router.get('/api/categories', categoriesController.getAllCategories);

module.exports = router;
