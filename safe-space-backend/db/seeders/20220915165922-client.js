"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("clients", [
      {
        // id: 1,
        first_name: "Jon",
        last_name: "Snow",
        phone_number: 12345678,
        email: "jon@snow.com",
        password: "Password123",
        photo_link: "abc",
        age_client: 29,
        gender: "Male",
        marital_status: "Single",
        therapist_confirmed: false,
        gender_preference: "Female",
        description: "I am looking for help.",
        active: false,
        admin: false,
        created_at: new Date(),
        updated_at: new Date(),
        specialization_id: 2,
        age_id: 1,
        language_id: 3,
        religion_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("clients", null, {});
  },
};
