"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("therapists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      photo_link: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      years_of_practice: {
        type: Sequelize.INTEGER,
      },
      education_qualification: {
        type: Sequelize.STRING,
      },
      admin: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // set agepreference_id
      agerange_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "age",
          key: "id",
        },
      },
      // set language_id
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "language",
          key: "id",
        },
      },
      // set religion_id
      religion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "religion",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("therapists");
  },
};
