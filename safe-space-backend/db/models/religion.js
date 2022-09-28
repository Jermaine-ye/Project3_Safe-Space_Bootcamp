"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Religion extends Model {
    static associate(models) {
      this.hasMany(models.client);
      this.hasMany(models.therapist);
    }
  }
  Religion.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "religion",
      underscored: true,
    }
  );
  return Religion;
};
