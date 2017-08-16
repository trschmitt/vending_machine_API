"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("items", [
      {
        description: "peanut butter bar",
        cost: 70,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "oreos",
        cost: 20,
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "chips",
        cost: 100,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "twizzlers",
        cost: 40,
        quantity: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "hat",
        cost: 1000,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "rubber ducks",
        cost: 1,
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "skittles",
        cost: 50,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "MJ bar",
        cost: 23000,
        quantity: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "LBJ cookie",
        cost: 3,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: "pirate barrrrr",
        cost: 100,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("items", null, {});
  }
};
