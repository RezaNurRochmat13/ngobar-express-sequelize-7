'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			'Films',
			[
				{
					title: 'Starwars',
					description: 'Starwars',
					release_year: 2004,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Harry Potter',
					description: 'Harry Potter',
					release_year: 2004,
					rating: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Starwars: The Return Jedi',
					description: 'Starwars: The Return Jedi',
					release_year: 2005,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Spiderman 1',
					description: 'Spiderman 1',
					release_year: 2004,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Siksa Lembur',
					description: 'Siksa Lembur',
					release_year: 2023,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Pengabdi Setan',
					description: 'Pengabdi Setan',
					release_year: 2021,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Si Merah Jembatan Ancol',
					description: 'Si Merah Jembatan Ancol',
					release_year: 2005,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Spiderman 2',
					description: 'Spiderman 2',
					release_year: 2008,
					rating: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Anak Setan',
					description: 'Anak Setan',
					release_year: 2010,
					rating: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
