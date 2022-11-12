"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("memoentries", [
      {
        general_input: "The meme guy",
        behavior_input: "Narcissist",
        contenttherapy_input: "Nothing can be done to treat him",
        therapeuticint_input: "Stroke his ego",
        diagnoses_input: "Sociopath he is",
        instructions_input: "Give him some medication and he should be alright",
        riskfactors_input: "He might start hurting others",
        therapist_id: 12,
        client_id: 1,
        created_at: "2022-08-19 02:59:00.000 +0900",
        updated_at: "2022-08-19 02:59:00.000 +0900",
      },
      {
        general_input: "I totally agree",
        behavior_input: "Definitely Narcissist",
        contenttherapy_input: "Just gg",
        therapeuticint_input: "Gotta research more",
        diagnoses_input: "Suffering from personal problems",
        instructions_input: "Maybe he needs some love",
        riskfactors_input: "He might start hurting others",
        therapist_id: 11,
        client_id: 1,
        created_at: "2022-09-19 02:59:00.000 +0900",
        updated_at: "2022-09-19 02:59:00.000 +0900",
      },
      {
        general_input: "The Japanese guy",
        behavior_input: "no cap",
        contenttherapy_input: "Send him to a hospital soon",
        therapeuticint_input: "FRFR",
        diagnoses_input: "Uhm",
        instructions_input: "Kek",
        riskfactors_input: "Bye",
        therapist_id: 11,
        client_id: 2,
        created_at: "2022-09-19 02:59:00.000 +0900",
        updated_at: "2022-09-19 02:59:00.000 +0900",
      },
      {
        general_input: "The awesome guy",
        behavior_input: "Shtuffff",
        contenttherapy_input: "Doggos",
        therapeuticint_input: "Doggos are required",
        diagnoses_input: "Not a numpty",
        instructions_input: "He should walk his doggos more times a day",
        riskfactors_input: "There is no risk.",
        therapist_id: 11,
        client_id: 3,
        created_at: "2022-09-19 02:59:00.000 +0900",
        updated_at: "2022-09-19 02:59:00.000 +0900",
      },
      {
        general_input: "Waku waku",
        behavior_input: "Anya has hacked into this memo",
        contenttherapy_input: "Peanuts",
        therapeuticint_input: "More peanuts?",
        diagnoses_input: "Anya is psychic",
        instructions_input: "Give her her parents",
        riskfactors_input: "Too many peanuts may destroy her health",
        therapist_id: 6,
        client_id: 4,
        created_at: "2022-09-19 02:59:00.000 +0900",
        updated_at: "2022-09-19 02:59:00.000 +0900",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("memoentries", null, {});
  },
};
