"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client_Therapists extends Model {
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
  Client_Therapists.init(
    {
      // id: DataTypes.INTEGER,
      chosenTherapist: DataTypes.BOOLEAN,
      feedback: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      endedAt: DataTypes.DATE,
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
      modelName: "client_therapists",
      underscored: true,
    }
  );
  return Client_Therapists;
};
