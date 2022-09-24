// "use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("language", [
      {
        // id: 1,
        name: "EN_CN",
      },
      {
        // id: 2,
        name: "EN_TM",
      },
      {
        // id: 3,
        name: "EN_MA",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("language", null, {});
  },
};
