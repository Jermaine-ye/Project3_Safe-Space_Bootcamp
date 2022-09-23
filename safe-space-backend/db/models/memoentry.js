"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memoentry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
    }
  }
  Memoentry.init(
    {
      // id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      generalInput: DataTypes.TEXT,
      behaviorInput: DataTypes.TEXT,
      contenttherapyInput: DataTypes.TEXT,
      therapeuticintInput: DataTypes.TEXT,
      diagnosesInput: DataTypes.TEXT,
      instructionsInput: DataTypes.TEXT,
      riskfactorsInput: DataTypes.TEXT,
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
      modelName: "memoentry",
      underscored: true,
    }
  );
  return Memoentry;
};
