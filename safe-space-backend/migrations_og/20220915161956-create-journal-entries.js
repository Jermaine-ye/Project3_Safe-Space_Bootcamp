"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("journal_entries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      due_by: {
        type: Sequelize.DATE,
      },
      inputone: {
        type: Sequelize.TEXT,
      },
      inputtwo: {
        type: Sequelize.TEXT,
      },
      inoutthree: {
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
      template_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "journaltemplate",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("journal_entries");
  },
};
