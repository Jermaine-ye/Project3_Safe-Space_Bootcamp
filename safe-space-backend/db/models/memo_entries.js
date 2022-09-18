"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memo_Entries extends Model {
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
  Memo_Entries.init(
    {
      // id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      generalInput: DataTypes.TEXT,
      behaviorInput: DataTypes.TEXT,
      contenttherapyInput: DataTypes.TEXT,
      therapeuticintInput: DataTypes.TEXT,
      diagnosesInput: DataTypes.TEXT,
      instructionsInput: DataTypes.TEXT,
      riskfactorsInput: DataTypes.TEXT,
      therapistsId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
      clientsId: {
        type: DataTypes.INTEGER,
        references: {
          model: "client",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "memo_entries",
      underscored: true,
    }
  );
  return Memo_Entries;
};
