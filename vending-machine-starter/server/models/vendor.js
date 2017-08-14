'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define('vendor', {
    name: DataTypes.TEXT,
    item_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.vendor.hasMany(models.item);
        models.vendor.hasMany(models.customer);
      }
    }
  });
  return vendor;
};
