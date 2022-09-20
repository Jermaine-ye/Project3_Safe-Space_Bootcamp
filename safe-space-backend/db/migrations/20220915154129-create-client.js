"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("clients", {
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
      phone_number: {
        type: Sequelize.INTEGER,
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
      age_client: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      marital_status: {
        type: Sequelize.STRING,
      },
      therapist_confirmed: {
        type: Sequelize.BOOLEAN,
      },
      gender_preference: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
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
      // set specialization_id
      specialization_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "specializations",
          key: "id",
        },
      },
      // set agepreference_id
      age_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ages",
          key: "id",
        },
      },
      // set language_id
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "languages",
          key: "id",
        },
      },
      // set religion_id
      religion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "religions",
          key: "id",
        },
      },
      dailymood: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("clients");
  },
};
