"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization_Therapists extends Model {
    static associate(models) {
      this.belongsTo(models.therapist);
      this.belongsTo(models.specialization);
    }
  }
  Specialization_Therapists.init(
    {
      therapistId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
      specializationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "specialization",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "specialization_therapists",
      underscored: true,
    }
  );
  return Specialization_Therapists;
};
