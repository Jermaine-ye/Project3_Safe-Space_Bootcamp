"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specialization", [
      //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      {
        // id: 1,
        name: "addiction",
      },
      {
        // id: 2,
        name: "relationship",
      },
      {
        // id: 3,
        name: "clinical mental",
      },
      {
        // id: 4,
        name: "clinical mental",
      },
      {
        // id: 5,
        name: "eating concerns/body image",
      },
      {
        // id: 6,
        name: "abuse/selfharm",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("specialization", null, {});
  },
};
