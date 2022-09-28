"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
    }
  }
  Appointment.init(
    {
      startDatetime: DataTypes.DATE,
      endDatetime: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      currentTherapist: DataTypes.BOOLEAN,
      therapistId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
      clientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "client",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "appointment",
      underscored: true,
    }
  );
  return Appointment;
};
