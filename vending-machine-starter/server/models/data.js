'use strict';
module.exports = function(sequelize, DataTypes) {
  var data = sequelize.define('data', {
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    quantitiy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return data;
};