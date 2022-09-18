"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blockeddates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      blocked_date: {
        type: Sequelize.DATE,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("blockeddates");
  },
};
