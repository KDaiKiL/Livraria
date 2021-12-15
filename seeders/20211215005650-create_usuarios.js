'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('usuarios', [{
      nome: 'John Doe',
      email: 'example@gmail.com'
    },{
      nome: 'Deivd Henrique',
      email: 'example321@gmail.com'
    }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
