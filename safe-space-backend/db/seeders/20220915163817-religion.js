"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("religions", [
      {
        // id: 1,
        religion: "No_preference",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        religion: "Christianity",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        religion: "Buddhism",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        religion: "Muslim",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 5,
        religion: "Hindu",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("religions", null, {});
  },
};
