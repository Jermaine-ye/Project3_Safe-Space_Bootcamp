// "use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("religion", [
      {
        // id: 1,
        religion: "No_preference",
      },
      {
        // id: 2,
        religion: "Christianity",
      },
      {
        // id: 3,
        religion: "Buddhism",
      },
      {
        // id: 4,
        religion: "Muslim",
      },
      {
        // id: 5,
        religion: "Hindu",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("religion", null, {});
  },
};
