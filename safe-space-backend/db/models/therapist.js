"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Therapist extends Model {
    static associate(models) {
      this.belongsToMany(models.specialization, {
        through: "specialization_therapists",
      });
      this.belongsToMany(models.client, {
        through: {
          model: "client_therapists",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.appointment);
      this.hasMany(models.memoentry);
      this.hasMany(models.journalentry);
      this.hasMany(models.blockeddate);
      this.belongsTo(models.age);
      this.belongsTo(models.language);
      this.belongsTo(models.religion);
    }
  }
  Therapist.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photoLink: DataTypes.STRING,
      gender: DataTypes.STRING,
      description: DataTypes.STRING,
      yearsOfPractice: DataTypes.INTEGER,
      educationQualification: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
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
    },
    {
      sequelize,
      modelName: "therapist",
      underscored: true,
    }
  );
  return Therapist;
};
