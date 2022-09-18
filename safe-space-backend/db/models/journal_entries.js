"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Journal_Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
      this.belongsTo(models.journaltemplate);
    }
  }
  Journal_Entries.init(
    {
      // id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      dueBy: DataTypes.DATE,
      input1: DataTypes.TEXT,
      input2: DataTypes.TEXT,
      input3: DataTypes.TEXT,
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
      templateId: {
        type: DataTypes.INTEGER,
        references: {
          model: "journaltemplates",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "journal_entries",
      underscored: true,
    }
  );
  return Journal_Entries;
};
