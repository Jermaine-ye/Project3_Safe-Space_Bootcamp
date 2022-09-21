"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("client_therapists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      chosen_therapist: {
        type: Sequelize.BOOLEAN,
      },
      feedback: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ended_at: {
        allowNull: true,
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
    await queryInterface.dropTable("client_therapists");
  },
};
