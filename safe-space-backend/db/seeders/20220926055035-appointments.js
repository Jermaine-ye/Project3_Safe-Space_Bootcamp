"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("appointments", [
      {
        // id: 1,
        start_datetime: "2022-08-19 22:59:00.000 +0900",
        end_datetime: "2022-08-19 23:59:00.000 +0900",
        current_therapist: false,
        created_at: "2022-08-10 10:30:09.410 +0900",
        updated_at: "2022-08-10 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 1,
      },
      {
        start_datetime: "2022-08-23 14:59:00.000 +0900",
        end_datetime: "2022-08-23 15:59:00.000 +0900",
        current_therapist: true,
        created_at: "2022-08-20 10:30:09.410 +0900",
        updated_at: "2022-08-20 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 1,
      },
      {
        start_datetime: "2022-09-26 11:59:00.000 +0900",
        end_datetime: "2022-09-26 12:59:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-20 10:30:09.410 +0900",
        updated_at: "2022-09-20 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 1,
      },
      {
        start_datetime: "2022-09-10 11:59:00.000 +0900",
        end_datetime: "2022-09-10 12:59:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-01 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 1,
      },
      {
        start_datetime: "2022-08-29 14:59:00.000 +0900",
        end_datetime: "2022-08-29 15:59:00.000 +0900",
        current_therapist: true,
        created_at: "2022-08-20 10:30:09.410 +0900",
        updated_at: "2022-08-20 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        start_datetime: "2022-09-15 14:23:00.000 +0900",
        end_datetime: "2022-09-15 16:23:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-10 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        start_datetime: "2022-10-20 14:23:00.000 +0900",
        end_datetime: "2022-10-20 16:23:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-10 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        start_datetime: "2022-10-26 14:23:00.000 +0900",
        end_datetime: "2022-10-26 16:23:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-20 10:30:09.410 +0900",
        updated_at: "2022-09-20 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 3,
      },
      {
        start_datetime: "2022-09-26 14:23:00.000 +0900",
        end_datetime: "2022-09-26 16:23:00.000 +0900",
        current_therapist: true,
        created_at: "2022-09-20 10:30:09.410 +0900",
        updated_at: "2022-09-20 10:30:09.410 +0900",
        therapist_id: 6,
        client_id: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appointments", null, {});
  },
};
