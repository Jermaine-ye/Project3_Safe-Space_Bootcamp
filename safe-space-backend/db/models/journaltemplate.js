"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Journaltemplate extends Model {
    static associate(models) {
      this.hasMany(models.journalentry);
    }
  }
  Journaltemplate.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "journaltemplate",
      underscored: true,
    }
  );
  return Journaltemplate;
};
