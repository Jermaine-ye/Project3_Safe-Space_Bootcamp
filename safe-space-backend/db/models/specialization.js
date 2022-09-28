"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    static associate(models) {
      this.hasMany(models.client);
      this.belongsToMany(models.therapist, {
        through: "specialization_therapists",
      });
    }
  }
  Specialization.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "specialization",
      underscored: true,
    }
  );
  return Specialization;
};
