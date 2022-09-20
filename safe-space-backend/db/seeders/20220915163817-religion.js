"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("religions", [
      {
        // id: 1,
        name: "No Preference",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        name: "Christianity",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        name: "Buddhism",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        name: "Islam",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 5,
        name: "Hinduism",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("religions", null, {});
  },
};
