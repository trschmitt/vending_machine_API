'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "items",
      [
        {
          description: "peanut butter bar",
          cost: 70,
          quantitiy: 10
        }, {
          description: "oreos",
          cost: 20,
          quantitiy: 30
        }, {
          description: "chips",
          cost: 100,
          quantitiy: 2
        }, {
          description: "twizzlers",
          cost: 40,
          quantitiy: 40
        }, {
          description: "hat",
          cost: 1000,
          quantitiy: 1
        }, {
          description: "rubber ducks",
          cost: 1,
          quantitiy: 100
        }, {
          description: "skittles",
          cost: 50,
          quantitiy: 7
        }, {
          description: "MJ bar",
          cost: 23000,
          quantitiy: 23
        }, {
          description: "LBJ cookie",
          cost: 3,
          quantitiy: 3
        }, {
          description: "pirate barrrrr",
          cost: 100,
          quantitiy: 2
        },
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('items', null, {});
  }
};
