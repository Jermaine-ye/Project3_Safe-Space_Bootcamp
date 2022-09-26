"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("client_therapists", [
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 1,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        ended_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 1,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        ended_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 2,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 3,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-09-01 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        ended_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 3,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-08-01 10:30:09.410 +0900",
        updated_at: "2022-08-10 10:30:09.410 +0900",
        therapist_id: 6,
        client_id: 4,
      },
      {
        chosen_therapist: true,
        feedback: "no feedback",
        created_at: "2022-08-01 10:30:09.410 +0900",
        updated_at: "2022-08-10 10:30:09.410 +0900",
        ended_at: "2022-08-10 10:30:09.410 +0900",
        therapist_id: 7,
        client_id: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("client_therapists", null, {});
  },
};
