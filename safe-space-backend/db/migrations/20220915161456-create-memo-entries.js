"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("memoentries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      general_input: {
        type: Sequelize.TEXT,
      },
      behavior_input: {
        type: Sequelize.TEXT,
      },
      contenttherapy_input: {
        type: Sequelize.TEXT,
      },
      therapeuticint_input: {
        type: Sequelize.TEXT,
      },
      diagnoses_input: {
        type: Sequelize.TEXT,
      },
      instructions_input: {
        type: Sequelize.TEXT,
      },
      riskfactors_input: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      therapist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "therapists",
          key: "id",
        },
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "clients",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("memoentries");
  },
};
