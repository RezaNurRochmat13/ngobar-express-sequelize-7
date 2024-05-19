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
			'Categories',
			[
				{
					name: 'Horror',
					description: 'Horror',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thriller',
					description: 'Thriller',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mystery',
					description: 'Mystery',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Comedy',
					description: 'Comedy',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Genuine',
					description: 'Genuine',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Romance',
					description: 'Romance',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Action',
					description: 'Action',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Crime',
					description: 'Crime',
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
