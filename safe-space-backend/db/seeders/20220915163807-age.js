"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ages", [
      {
        // id: 1,
        age_range: "20-29",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        age_range: "30-39",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        age_range: "40-49",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        age_range: "50-59",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ages", null, {});
  },
};
