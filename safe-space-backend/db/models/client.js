"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      this.belongsTo(models.specialization);
      this.belongsTo(models.age);
      this.belongsTo(models.language);
      this.belongsTo(models.religion);
      this.belongsToMany(models.therapist, {
        through: {
          model: "client_therapists",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.appointment);
      this.hasMany(models.memoentry);
      this.hasMany(models.journalentry);
    }
  }
  Client.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photoLink: DataTypes.STRING,
      ageClient: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      maritalStatus: DataTypes.STRING,
      therapistConfirmed: DataTypes.BOOLEAN,
      genderPreference: DataTypes.STRING,
      description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      admin: DataTypes.BOOLEAN,
      specializationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "specialization",
          key: "id",
        },
      },
      ageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "age",
          key: "id",
        },
      },

      languageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "language",
          key: "id",
        },
      },
      religionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "religion",
          key: "id",
        },
      },
      dailymood: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "client",
      underscored: true,
    }
  );
  return Client;
};
