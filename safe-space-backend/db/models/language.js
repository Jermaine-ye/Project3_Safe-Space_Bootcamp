"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      this.hasMany(models.client);
      this.hasMany(models.therapist);
    }
  }
  Language.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "language",
      underscored: true,
    }
  );
  return Language;
};
