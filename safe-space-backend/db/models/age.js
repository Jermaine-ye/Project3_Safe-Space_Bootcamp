"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Age extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.client);
      this.hasMany(models.therapist);
    }
  }
  Age.init(
    {
      // id: DataTypes.INTEGER,
      ageRange: DataTypes.STRING,
      // therapistsId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "therapist",
      //     key: "id",
      //   },
      // },
      // clientsId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "client",
      //     key: "id",
      //   },
      // },
    },
    {
      sequelize,
      modelName: "age",
      underscored: true,
    }
  );
  return Age;
};
