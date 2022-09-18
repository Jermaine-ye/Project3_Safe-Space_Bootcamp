"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BlockedDate extends Model {
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
  BlockedDate.init(
    {
      // id: DataTypes.INTEGER,
      blockedDate: DataTypes.DATE,
      therapistsId: {
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
  return BlockedDate;
};
