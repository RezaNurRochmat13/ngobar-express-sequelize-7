const express = require('express');
const PORT = process.env.APP_PORT || 8080;
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const filmRoutes = require('./routing/film.routes');
const categoryRoutes = require('./routing/category.routes');

app.use(filmRoutes);
app.use(categoryRoutes);

app.get('/', (request, response) => {
	response.json({ message: 'Application is running' });
});

app.listen(PORT, () => {
	console.log(`Application running at localhost ${PORT}`);
});
