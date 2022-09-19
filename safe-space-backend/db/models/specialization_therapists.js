"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization_Therapists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.therapist);
      this.belongsTo(models.specialization);
    }
  }
  Specialization_Therapists.init(
    {
      // id: DataTypes.INTEGER,
      therapistId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
      specializationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "specialization",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "specialization_therapists",
      underscored: true,
    }
  );
  return Specialization_Therapists;
};
