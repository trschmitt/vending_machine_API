"use strict";
module.exports = function(sequelize, DataTypes) {
  let item = sequelize.define(
    "item",
    {
      description: DataTypes.TEXT,
      cost: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return item;
};
