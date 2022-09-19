"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("age", [
      {
        // id: 1,
        age_range: "20-29",
      },
      {
        // id: 2,
        age_range: "30-39",
      },
      {
        // id: 3,
        age_range: "40-49",
      },
      {
        // id: 4,
        age_range: "50-59",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("age", null, {});
  },
};
