'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'yusuf',
        profession: 'Admin',
        role: 'admin',
        email: 'yusuf@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'fulan',
        profession: 'Lainnya',
        role: 'student',
        email: 'fulan77@gmail.com',
        password: await bcrypt.hash('rahasiaku123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};