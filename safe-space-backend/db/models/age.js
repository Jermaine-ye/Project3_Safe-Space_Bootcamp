"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Age extends Model {
    static associate(models) {
      this.hasMany(models.client);
      this.hasMany(models.therapist);
    }
  }
  Age.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "age",
      underscored: true,
    }
  );
  return Age;
};
