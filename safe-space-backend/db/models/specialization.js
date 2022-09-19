"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.client);
      this.belongsToMany(models.therapist, {
        through: "specialization_therapists",
      });
    }
  }
  Specialization.init(
    {
      // id: DataTypes.INTEGER,
      name: DataTypes.STRING,
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
      modelName: "specialization",
      underscored: true,
    }
  );
  return Specialization;
};
