"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blockeddate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.therapist);
    }
  }
  Blockeddate.init(
    {
      // id: DataTypes.INTEGER,
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
