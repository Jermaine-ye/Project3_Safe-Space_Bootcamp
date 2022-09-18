"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("specialization_therapists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialization_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "specializations",
          key: "id",
        },
      },
      therapist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "therapists",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("specialization_therapists");
  },
};
