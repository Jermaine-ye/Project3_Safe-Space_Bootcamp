"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Journalentry extends Model {
    static associate(models) {
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
      this.belongsTo(models.journaltemplate);
    }
  }
  Journalentry.init(
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      dueBy: DataTypes.DATE,
      input1: DataTypes.TEXT,
      input2: DataTypes.TEXT,
      input3: DataTypes.TEXT,
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
      journaltemplateId: {
        type: DataTypes.INTEGER,
        references: {
          model: "journaltemplate",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "journalentry",
      underscored: true,
    }
  );
  return Journalentry;
};
