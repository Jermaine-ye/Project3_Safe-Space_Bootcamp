"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("journalentries", [
      {
        // id: 1,
        due_by: "2022-08-20 00:00:00.000 +0900",
        input1: "Winter",
        input2: "I love winter and it lets me go on a meme streak.",
        input3:
          "I will continue to love winter but maybe I will try loving summer a little too.",
        created_at: "2022-08-10 10:30:09.410 +0900",
        updated_at: "2022-08-19 23:59:00.000 +0900",
        therapist_id: 12,
        client_id: 1,
      },
      {
        due_by: "2022-08-30 00:00:00.000 +0900",
        input1: "More winter",
        input2: "How can I not love winter?",
        input3:
          "I hate summer now. Please don't even bother to get close to me if you're a summer person.",
        created_at: "2022-08-20 10:30:09.410 +0900",
        updated_at: "2022-08-29 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 1,
      },
      {
        due_by: "2022-09-02 00:00:00.000 +0900",
        input1: "My life",
        input2: "Happy waifu happy laifu - This is the essence of life.",
        input3: "No comments, my thoughts don't change.",
        created_at: "2022-08-30 10:30:09.410 +0900",
        updated_at: "2022-09-01 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 2,
      },
      {
        due_by: "2022-09-11 00:00:00.000 +0900",
        input1: "Okinawa",
        input2: "Attending my friend's wedding in Okinawa was awesome.",
        input3: "I would love to come back to Okinawa again soon.",
        created_at: "2022-09-05 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        due_by: "2022-09-30 00:00:00.000 +0900",
        created_at: "2022-09-20 10:30:09.410 +0900",
        updated_at: "2022-09-20 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 2,
      },
      {
        due_by: "2022-09-20 00:00:00.000 +0900",
        input1: "My students in FTBC8",
        input2:
          "Well, there is nothing to say other than that they are the most awesome people.",
        input3: "I am equally awesome as well of course.",
        created_at: "2022-09-10 10:30:09.410 +0900",
        updated_at: "2022-09-15 10:30:09.410 +0900",
        therapist_id: 12,
        client_id: 3,
      },
      {
        due_by: "2022-09-20 00:00:00.000 +0900",
        input1: "My upcoming wedding",
        input2: "I am so excited POGGIESSSSS",
        input3:
          "It will be worth all the preparation and extra stress I am going through now after the wedding when I see many delighted faces.",
        created_at: "2022-09-10 10:30:09.410 +0900",
        updated_at: "2022-09-10 10:30:09.410 +0900",
        therapist_id: 11,
        client_id: 3,
      },
      {
        due_by: "2022-08-15 00:00:00.000 +0900",
        input1: "ANYA",
        input2: "ANYA WAKU WAKU",
        input3: "WAKU WAKU",
        created_at: "2022-08-11 10:30:09.410 +0900",
        updated_at: "2022-08-14 10:30:09.410 +0900",
        therapist_id: 7,
        client_id: 4,
      },
      {
        due_by: "2022-09-20 00:00:00.000 +0900",
        input1: "ANYA",
        input2: "Peanuts",
        input3: "Give me more peanuts!",
        created_at: "2022-09-10 10:30:09.410 +0900",
        updated_at: "2022-09-17 10:30:09.410 +0900",
        therapist_id: 6,
        client_id: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("journalentries", null, {});
  },
};
