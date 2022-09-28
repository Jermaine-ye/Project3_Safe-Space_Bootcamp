"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recommendationarticle extends Model {
    static associate(models) {}
  }
  Recommendationarticle.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "recommendationarticle",
      underscored: true,
    }
  );
  return Recommendationarticle;
};
