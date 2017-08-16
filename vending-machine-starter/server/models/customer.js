"use strict";
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define(
    "customer",
    {
      availableMoney: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {}
      }
    }
  );
  return customer;
};
