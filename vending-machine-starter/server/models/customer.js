'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    name: DataTypes.TEXT,
    vendor_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.customer.hasMany(models.item); 
      }
    }
  });
  return customer;
};
