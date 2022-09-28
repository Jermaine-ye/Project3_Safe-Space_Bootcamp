"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client_Therapists extends Model {
    static associate(models) {
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
    }
  }
  Client_Therapists.init(
    {
      chosenTherapist: DataTypes.BOOLEAN,
      feedback: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      endedAt: DataTypes.DATE,
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
      modelName: "client_therapists",
      underscored: true,
    }
  );
  return Client_Therapists;
};
