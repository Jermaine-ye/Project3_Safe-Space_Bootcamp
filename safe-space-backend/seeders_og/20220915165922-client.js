"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("client", [
      {
        // id: 1,
        first_name: "Jon",
        last_name: "Snow",
        phone_number: "12345678",
        email: "jon@snow.com",
        password: "Password123",
        photo_link: "abc",
        age_Client: "29",
        gender: "Male",
        marital_status: "Single",
        therapist_confirmed: false,
        gender_preference: "Female",
        description: "I am looking for help.",
        active: false,
        admin: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("client", null, {});
  },
};
