const db = require('../models');
const Film = db.Film;

class FilmController {
	static getAllFilms = async (request, response) => {
		const films = await Film.findAll();

		return response.json({ data: films });
	};

	static getFilmById = async (request, response) => {
		const film = await Film.findByPk(request.params.id);

		if (!film) return response.status(404).json({ message: 'Film not found' });

		return response.json({ data: film });
	};
}

module.exports = FilmController;
