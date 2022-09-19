"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Therapist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.specialization, {
        through: "specialization_therapists",
      });
      this.belongsToMany(models.client, {
        through: "client_therapists",
      });
      this.hasMany(models.appointment);
      this.hasMany(models.memoentry);
      this.hasMany(models.journalentry);
      // this.belongsToMany(models.client, {
      //   through: "appointments",
      // });
      // this.belongsToMany(models.client, {
      //   through: "memo_entries",
      // });
      // this.belongsToMany(models.client, {
      //   through: "journal_entries",
      // });
      this.hasMany(models.blockeddate);
      this.belongsTo(models.age);
      this.belongsTo(models.language);
      this.belongsTo(models.religion);
    }
  }
  Therapist.init(
    {
      // id: DataTypes.INTEGER,
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
      // set agepreference_id
      ageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "age",
          key: "id",
        },
      },
      // set language_id
      languageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "language",
          key: "id",
        },
      },
      // set religion_id
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
