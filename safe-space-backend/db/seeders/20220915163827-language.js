"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("languages", [
      {
        // id: 1,
        name: "English and Chinese",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        name: "English and Tamil",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        name: "English and Malay",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("languages", null, {});
  },
};
