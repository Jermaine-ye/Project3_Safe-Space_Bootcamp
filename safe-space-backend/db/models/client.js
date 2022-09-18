"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.specialization);
      this.belongsTo(models.age);
      this.belongsTo(models.language);
      this.belongsTo(models.religion);
      this.belongsToMany(models.therapist, {
        through: "client_therapists",
      });
      this.belongsToMany(models.therapist, {
        through: "appointments",
      });
      this.belongsToMany(models.therapist, {
        through: "memo_entries",
      });
      this.belongsToMany(models.therapist, {
        through: "journal_entries",
      });
    }
  }
  Client.init(
    {
      // id: DataTypes.INTEGER,
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
      // set specialization_id
      specializationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "specialization",
          key: "id",
        },
      },
      // set agepreference_id
      agepreferenceId: {
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
      modelName: "client",
      underscored: true,
    }
  );
  return Client;
};
