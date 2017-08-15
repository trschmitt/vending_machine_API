'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "items",
      [
        {
          description: "peanut butter bar",
          cost: 70,
          quantity: 10
        }, {
          description: "oreos",
          cost: 20,
          quantity: 30
        }, {
          description: "chips",
          cost: 100,
          quantity: 2
        }, {
          description: "twizzlers",
          cost: 40,
          quantity: 40
        }, {
          description: "hat",
          cost: 1000,
          quantity: 1
        }, {
          description: "rubber ducks",
          cost: 1,
          quantity: 100
        }, {
          description: "skittles",
          cost: 50,
          quantity: 7
        }, {
          description: "MJ bar",
          cost: 23000,
          quantity: 23
        }, {
          description: "LBJ cookie",
          cost: 3,
          quantity: 3
        }, {
          description: "pirate barrrrr",
          cost: 100,
          quantity: 2
        },
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('items', null, {});
  }
};
