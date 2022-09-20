"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ages", [
      {
        // id: 1,
        name: "20-29",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        name: "30-39",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        name: "40-49",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        name: "50-59",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ages", null, {});
  },
};
