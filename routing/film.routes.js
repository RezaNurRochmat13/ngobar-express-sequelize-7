const express = require('express');
const router = express.Router();
const filmController = require('../controller/films.controller');

router.get('/api/films', filmController.getAllFilms);
router.get('/api/films/:id', filmController.getFilmById);

module.exports = router;
