"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Journalentry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
      this.belongsTo(models.journaltemplate);
    }
  }
  Journalentry.init(
    {
      // id: DataTypes.INTEGER,
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
