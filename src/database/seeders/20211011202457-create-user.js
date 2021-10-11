'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const user = [
      {
        name: 'Fran',
        last_name: 'Jimenez',
        directions: 'Sucre 35',
        birt_date: '12345'
      }
    ]
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
