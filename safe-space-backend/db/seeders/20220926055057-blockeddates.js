"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("blockeddates", [
      {
        // id: 1,
        date: "2022-08-20 02:59:00.000 +0900",
        created_at: "2022-08-19 02:59:00.000 +0900",
        updated_at: "2022-08-19 02:59:00.000 +0900",
        therapist_id: 11,
      },
      {
        date: "2022-08-30 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 11,
      },
      {
        date: "2022-09-17 02:59:00.000 +0900",
        created_at: "2022-08-19 02:59:00.000 +0900",
        updated_at: "2022-08-19 02:59:00.000 +0900",
        therapist_id: 11,
      },
      {
        date: "2022-09-24 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 11,
      },
      {
        date: "2022-10-24 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 11,
      },
      {
        date: "2022-08-20 02:59:00.000 +0900",
        created_at: "2022-08-19 02:59:00.000 +0900",
        updated_at: "2022-08-19 02:59:00.000 +0900",
        therapist_id: 6,
      },
      {
        date: "2022-08-30 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 6,
      },
      {
        date: "2022-09-17 02:59:00.000 +0900",
        created_at: "2022-08-19 02:59:00.000 +0900",
        updated_at: "2022-08-19 02:59:00.000 +0900",
        therapist_id: 6,
      },
      {
        date: "2022-09-24 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 6,
      },
      {
        date: "2022-10-24 02:59:00.000 +0900",
        created_at: "2022-08-20 02:59:00.000 +0900",
        updated_at: "2022-08-20 02:59:00.000 +0900",
        therapist_id: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blockeddates", null, {});
  },
};
