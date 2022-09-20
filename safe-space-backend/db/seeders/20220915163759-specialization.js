"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("specializations", [
      //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      {
        // id: 1,
        name: "addiction",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        name: "relationship",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3&4,
        name: "clinical mental",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 5,
        name: "eating concerns / body image",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 6,
        name: "abuse / selfharm",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("specializations", null, {});
  },
};
