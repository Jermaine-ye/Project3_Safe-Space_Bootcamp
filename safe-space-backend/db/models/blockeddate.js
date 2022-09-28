"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blockeddate extends Model {
    static associate(models) {
      this.belongsTo(models.therapist);
    }
  }
  Blockeddate.init(
    {
      date: DataTypes.DATE,
      therapistId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "blockeddate",
      underscored: true,
    }
  );
  return Blockeddate;
};
