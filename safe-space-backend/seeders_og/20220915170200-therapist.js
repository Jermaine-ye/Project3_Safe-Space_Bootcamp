"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("therapist", [
      {
        // Id: 1,
        first_name: "Tarin",
        last_name: "Choudhury",
        email: "tarin@choudhury.com",
        password: "Password123",
        photo_link: "",
        agerange_id: 2,
        religion_id: 1,
        gender: "Female",
        description:
          "Tarin believes that everyone has the power within them to change their future for greater well-being and tranquil life. As a counsellor, her priority is to provide a safe and secure environment where her clients are able to explore their inner thoughts and emotions with confidence and reassurance. In this safe space, she aims to guide them through their journey of self-discovery where they will learn to more adeptly identify their thoughts, emotions, and behaviours, and pick up new healthy coping mechanisms which will help them navigate their respective challenges. She works with teenagers, young adults, and adults, experiencing a wide range of issues from stress, anxiety, depression, and low self-esteem to grief and loss.",
        years_of_practice: 9,
        education_qualification:
          "Master of Counselling (Swinburne University of Technology, Australia)",
        language_id: 3,
        admin: true,
        //2, 6, 34
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 2,
        first_name: "Lilian",
        last_name: "Ong",
        email: "lilian@ong.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 1,
        gender: "Female",
        description:
          "The good life is a process, not a state of being. - Carl Rogers. Lilian holds the opinion that everyone has the potential to live a satisfying life, despite their varying circumstances. With 18 years of counselling experience, she has worked with clients of diverse backgrounds such as prison inmates, hospital patients, men, women, youths, and babies. To her, everyone deserves to live a meaningful life, and she hopes to facilitate that journey for her clients.",
        years_of_practice: 18,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //34, 2, 5
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 3,
        first_name: "Maltrish",
        last_name: "Kaur",
        email: "maltrish@kaur.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 1,
        gender: "Female",
        description:
          "To love, to share, to give, to dare to grow just where we are. - The Hugging Tree by Jill Neimark. Maltrish believes in the importance of holding a safe and non-judgmental space to encourage openness and honesty in her sessions - two essential factors for effective change and healthy, progressive growth. To her, one's counselling journey can be a meaningful and rewarding experience as we grow to be at peace with ourselves.Maltirsh began her counselling journey in 2017, and she works with children, youths, and adults. Maltrish is also comfortable with and welcomes everyone for counselling, including persons from the LGBTQ+ community. Embodying a gentle, patient, kind, and supportive approach, she journeys with her clients at their preferred pace.",
        years_of_practice: 5,
        education_qualification:
          "Master of Counselling (Swinburne University of Technology, Australia)",
        language_id: 3,
        admin: true,
        //1, 2, 34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 4,
        first_name: "Caroline",
        last_name: "Fernandez",
        email: "caroline@ho.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 1,
        gender: "Female",
        description:
          "Courage starts with showing up and letting ourselves be seen. - Brené Brown. To Caroline, counselling is a part of one’s self-care journey and the decision to seek counselling is a courageous one. As a counsellor, Caroline believes that all individuals and their experiences are unique, and sees herself as someone who walks alongside her clients as they manoeuvre life's challenges and work towards self-acceptance. Caroline works with adults and young adults, including LGBTQIA+ clients, and provides support for anxiety, self-esteem, depression, anger management, addiction as well as relationship issues.",
        years_of_practice: 15,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //1, 2, 34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 5,
        first_name: "Glennamarie",
        last_name: "Meenachi",
        email: "glennamarie@meenachi.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 2,
        religion_id: 4,
        gender: "Female",
        description:
          "The most beautiful people we have known are those who have known defeat, suffering, struggle, and loss, and have found their way out of those depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and deep loving concern. Beautiful people do not just happen. - Dr. Kubler RossCommitted to creating a safe environment that promotes clients' well-being, Glennamarie believes that the journey towards self-healing and personal growth is possible if we extend the same warmth, kindness, and care to ourselves as we do to our loved ones.",
        years_of_practice: 14,
        education_qualification:
          "Master of Clinical Psychology (University of Cyberjaya, Malaysia)",
        language_id: 2,
        admin: true,
        //34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 6,
        first_name: "Abigail",
        last_name: "Yang",
        email: "abigail@yang.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 2,
        gender: "Female",
        description:
          "“Life is never made unbearable by circumstances, but only by lack of meaning and purpose.” - Viktor Frankl. As a Therapist, Abigail endeavours to empower her clients as they navigate rough times and life transitions to achieve personal growth. She believes in the importance of caring for one's mental and emotional health and that every individual has the potential to overcome stormy periods in their life.",
        years_of_practice: 17,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //2, 34, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 7,
        first_name: "Lenca",
        last_name: "Yew",
        email: "lenca@yew.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 2,
        gender: "Female",
        description:
          "Although the world is full of suffering, it is also full of the overcoming of it. - Helen Keller. Lenca considers seeking therapy a courageous act in and of itself, as exploring and delving into one's inner world requires intention, strength, and resilience. In doing so, she believes, brings us clarity and self-awareness, and improves relationships with ourselves and others, thereby allowing us to lead more purposeful and fulfilled lives.",
        years_of_practice: 20,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //2, 34
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 8,
        first_name: "Joyce",
        last_name: " Low",
        email: "joyce@low.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 1,
        gender: "Female",
        description:
          "I am not what happened to me, I am what I choose to become. - Carl Jung. Joyce believes that healing and recovery are entirely possible once we discover new ways of being and living. As a counsellor, she endeavours to provide clients with emotional and psychological support in a safe, non-judgmental, and encouraging space. Joyce works with tertiary students, individuals, and couples from a range of diverse backgrounds. Some issues she helps with include anxiety, depression, addiction, caregiver stress, burnout, grief, parenting challenges, relationship issues, and post-traumatic stress disorder. ",
        years_of_practice: 25,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 3,
        admin: true,
        //1, 2, 34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 9,
        first_name: "Ian",
        last_name: "Ong",
        email: "ian@ong.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 1,
        gender: "Male",
        description:
          "We don't have to do it all alone. We were never meant to. - Brené Brown. Ian strongly believes that every person has the amazing capacity for growth and healing - we have the potential to thrive in challenging situations, nurture more fulfilling relationships, and experience life with more openness and authenticity.",
        years_of_practice: 15,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //2, 34, 5
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 10,
        first_name: "Sheng Chua",
        last_name: "Tok",
        email: "shengchua@tok.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 1,
        gender: "Male",
        description:
          "Don't ever discount the wonder of your tears. They can be healing waters and a stream of joy. Sometimes they are the best words the heart can speak. - William Paul Young. Tok Sheng's passion lies in guiding clients towards finding greater clarity in their lives and seeing them experience peace and joy as they become more self-empowered. To him, healing starts with being heard and validated.",
        years_of_practice: 5,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: true,
        //34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 11,
        first_name: "Mou Nyee",
        last_name: "Lim",
        email: "mounyee@lim.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 1,
        gender: "Male",
        description:
          "Change is a journey, not a destination. The goal is not to be better than the other person, but your previous self. Having been in the helping profession for close to 25 years, Mou Nyee has ample experience helping individuals reach their potential.He works with both youths and adults facing stress, behavioural challenges, or self-esteem issues, as well as couples looking to navigate conflicts and challenges in their relationships, or are at crossroads as changes surface (eg marriage, parenting). He too offers clinical supervision for counsellors and social workers.",
        years_of_practice: 25,
        education_qualification:
          "Master of Social Science in Counselling (Edith Cowan University, Australia)",
        language_id: 1,
        admin: true,
        //2, 34, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 12,
        first_name: "Ada",
        last_name: "Chung",
        email: "ada@chung.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 1,
        gender: "Female",
        description:
          "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - Nelson Mandela. Ada is an experienced counsellor with over 20 years of experience in counselling and coaching. She works with both young adults and adults facing various emotional and psychological challenges, and specialises in helping them to break unhealthy thinking patterns, manage stress, and deal with anxiety. She also provides support for self-esteem and -development issues, as well as phobias.",
        years_of_practice: 20,
        education_qualification:
          "Doctoral Degree in Education (University of Technology, Australia)",
        language_id: 1,
        admin: true,
        //2, 34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 13,
        first_name: "Rathi",
        last_name: "Lieberum",
        email: "rathi@lieberum.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 4,
        gender: "Female",
        description:
          "The pain is there; when you close one door on it, it knocks to come in somewhere else. - Irvin D. Yalom. Rathi believes in creating a safe environment for her clients to heal and grow by adopting a non-judgemental, collaborative and person-centred approach during sessions. Rathi is a registered Clinical Psychologist on the Singapore Register of Psychologists and a member of the Singapore Psychologist Society. She obtained her Masters in Psychology (Clinical) from James Cook University and has since been working with individuals and families with a wide range of emotional and behavioural issues, providing services that span from therapy for depression, anxiety, post-traumatic stress disorder (PTSD), obsessive compulsive disorder (OCD) and other mental health difficulties.",
        years_of_practice: 5,
        education_qualification:
          "Master of Psychology (Clinical), James Cook University",
        language_id: 3,
        admin: true,
        //34, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 14,
        first_name: "Li Nah",
        last_name: "Loh",
        email: "linah@loh.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 3,
        gender: "Female",
        description:
          "Life isn't how you survive the thunderstorm, but how you dance in the rain. - Adam Young. Having been in the academic and mental health professions for more than 20 years, Li Nah has extensive experience working with clients on stress, emotions, and relationship issues. She believes that her clients are the true experts of their own lives, and guides them through their intuition, inner wisdom, and personal strengths to journey with them towards self-discovery, self-acceptance, and meaningful interpersonal relationships.  ",
        years_of_practice: 21,
        education_qualification:
          "Master of Social Science in Counselling (University of South Australia)",
        language_id: 1,
        admin: true,
        //1, 2, 34, 5, 6
        //1 = addiction, 2 = relationship, 3&4 = clinical mental, 5 = eating concerns/body image, 6 = abuse/selfharm
      },
      {
        // Id: 15,
        first_name: "Liam",
        last_name: "Loh",
        email: "liam@loh.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 3,
        gender: "Female",
        description:
          "Her counselling approach is person-centred and eclectic, and she employs a variety of experiential techniques such as breathing, guided imagery, and meditation. Li Nah utilises therapeutic tools such as expressive art and narrative therapy and provides a safe environment for her clients to work through any tough and complex emotions.",
        years_of_practice: 15,
        education_qualification:
          "Master of Social Science in Counselling (University of South Australia)",
        language_id: 1,
        admin: True,
      },
      {
        // Id: 16,
        first_name: "Kayden",
        last_name: "Perera",
        email: "kayden@perera.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 1,
        gender: "Female",
        description:
          "She works together with the client to get to the heart of whatever causes them mental or emotional discomfort. Together with the client, she creates a psychotherapeutic counselling plan to effectively manage and overcome their challenges.",
        years_of_practice: 3,
        education_qualification:
          "Master of Professional Counselling (Swinburne University of Technology, Australia)",
        language_id: 3,
        admin: True,
      },
      {
        // Id: 17,
        first_name: "Jeanette",
        last_name: "Houmayune",
        email: "jeanette@houmayune.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 2,
        religion_id: 4,
        gender: "Female",
        description:
          "She sees herself as a facilitator, guiding clients through the process of goal-setting and committing to sustainable positive changes, one step at a time. She aims to empower them in a solution-focused journey with systemic family therapy, cognitive-behavioural therapy and hypnotherapy, amongst other therapeutic approaches.",
        years_of_practice: 3,
        education_qualification:
          "Master of Counselling (Swinburne University of Technology, Australia)",
        language_id: 3,
        admin: True,
      },
      {
        // Id: 18,
        first_name: "Priyahnisha",
        last_name: "N",
        email: "priyahnisha@n.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 5,
        gender: "Female",
        description:
          "Nisha is a passionate and person-centred psychotherapist, counsellor, trainer and speaker with more than 5 years of clinical experience in Singapore. She holds a degree in Psychology, Masters in Professional Counselling and specialist certifications in Cognitive Behavioural Therapy and Suicide Intervention.",
        years_of_practice: 10,
        education_qualification:
          "Master of Professional Counselling (Swinburne University of Technology, Australia)",
        language_id: 2,
        admin: True,
      },
      {
        // Id: 19,
        first_name: "Joseph",
        last_name: "Quek",
        email: "jospeh@quek.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 2,
        gender: "Male",
        description:
          "His professional background includes lecturing and programme management. As a lecturer, he facilitated the modules of the Specialist Diploma in Counselling and Psychology. He also develops and customises new programmes, workshops, and courses for corporate organisations, government agencies, schools, and the public.",
        years_of_practice: 3,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 1,
        admin: True,
      },
      {
        // Id: 20,
        first_name: "Punitha",
        last_name: "Gunasegaran",
        email: "punitha@gunasegaran.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 5,
        gender: "Female",
        description:
          "Her professional background includes clinical work, programme management and mentoring others to develop to their full potential. She has 12 years of clinical experience in working with individuals with complex needs, individuals experiencing difficulties in regulating their emotions, addictions, grief and loss. She has a Masters in Applied Psychology (Counselling Psychology) and has worked with individuals facing a wide range of emotional issues including depression, anxiety, addictions and trauma.",
        years_of_practice: 12,
        education_qualification:
          "Master of Arts in Applied Psychology - Counselling Psychology (National Institute of Education, Singapore)",
        language_id: 2,
        admin: True,
      },
      {
        // Id: 21,
        first_name: "Ser",
        last_name: "Fee",
        email: "ser@fee.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 5,
        gender: "Female",
        description:
          "As a counsellor, Ser Fee has worked with young adults and professionals from major corporations such as tech companies, accounting firms and financial institutions. Her clients include locals and expatriates, private clients as well as EAP clients and their dependents. She also has significant experience with children and youths.",
        years_of_practice: 3,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 5,
        admin: True,
      },
      {
        // Id: 22,
        first_name: "Alexandra",
        last_name: "Oh",
        email: "alexandra@oh.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 3,
        religion_id: 1,
        gender: "Female",
        description:
          "Alexandra graduated with BSc (Hons) in Psychology from Michigan State University and a Master’s in Counselling (Distinction) from Monash University. She is a warm, positive therapist that aims to meet each of her clients at their personal level of comfort. With 12 years of experience, Alexandra is adaptive and uses client-centered approaches to help her clients see areas of dimness or disillusion with more insight and clarity.",
        years_of_practice: 12,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 2,
        admin: True,
      },
      {
        // Id: 23,
        first_name: "Elisabeth",
        last_name: "Makalew",
        email: "elisabeth@makalew.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 2,
        religion_id: 2,
        gender: "Female",
        description:
          "Desieree is a trained psychologist and psychotherapist with a Master’s in Psychology – Counselling from the University of Derby. She has since been working with individuals and families, from various backgrounds, with a wide range of emotional and behavioural issues. Prior to becoming a psychologist, she has had over a decade of working experience in the commercial and finance industry. Her professional experiences have made her understand how important it is to prioritise mental wellbeing. Desieree is currently pursuing her doctorate in Applied Psychology, actively researching on media and Emotional Regulation.",
        years_of_practice: 6,
        education_qualification:
          "Master of Science in Psychology - Counselling (University of Derby)",
        language_id: 1,
        admin: True,
      },
      {
        // Id: 24,
        first_name: "Aisha",
        last_name: "binti Hafiz",
        email: "aisha@aisha.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 1,
        religion_id: 4,
        gender: "Female",
        description:
          "Alicia has seven years of clinical experience, utilising a blend of Invitational Practice (Alan Jenkins), Narrative Practice (Michael White), and Response-Based Approach (Alan Wade), with ongoing professional development in these and other areas. She is solution-focused, prioritising approachability, mutual respect and personal agency, walking alongside clients towards clarity of the problem and how to respond in a way that reveals one’s dignity and ethics.",
        years_of_practice: 3,
        education_qualification:
          "Master's in Counselling (Murdoch University, Australia)",
        language_id: 3,
        admin: True,
      },
      {
        // Id: 25,
        first_name: "Rashmi",
        last_name: "Kunzru",
        email: "rashmi@kunzru.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 2,
        religion_id: 5,
        gender: "Female",
        description:
          "Rashmi is a skilled person-centred therapist, but also integrates other counselling approaches like Narrative Therapy, Cognitive Behaviour Therapy and Solution Focused Therapy, depending on the needs of individual clients. She prioritises trust and respect for the client in a therapeutic relationship.",
        years_of_practice: 9,
        education_qualification:
          "Master of Social Sciences in Counselling (City University of Hong Kong)",
        language_id: 2,
        admin: True,
      },
      {
        // Id: 26,
        first_name: "Karen",
        last_name: "Chok",
        email: "karen@chok.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 2,
        gender: "Female",
        description:
          "Karen is a clinical member and registered counsellor of the Singapore Association for Counselling. Her approach is client-centred whereby she actively collaborates with clients (including individuals, couples and families) to manage their issues and conflicts, while working together on their strengths and growth areas. These efforts aim to enable her clients to progress, promote welfare for all parties involved and achieve goals that are life-enhancing.",
        years_of_practice: 15,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 2,
        admin: True,
      },
      {
        // Id: 27,
        first_name: "Edmund",
        last_name: "Chong",
        email: "edmund@chong.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 4,
        religion_id: 3,
        gender: "Male",
        description:
          "Edmund has been a counsellor in Singapore for ten years. Growing up, Edmund found himself searching for solutions to his problems in self-help books. At 26, he met an empathetic counsellor who turned his life around. The counsellor helped him work through his issues and set some realistic goals. Inspired by this positive experience, Edmund made it his mission to become a professional counsellor himself.",
        years_of_practice: 20,
        education_qualification:
          "Master of Professional Counselling (Swinburne University, Australia)",
        language_id: 1,
        admin: True,
      },
      {
        // Id: 28,
        first_name: "Alyssa",
        last_name: "Fernandez",
        email: "alyssa@fernandez.com",
        password: "Password123",
        photo_link: "abc",
        agerange_id: 2,
        religion_id: 1,
        gender: "Female",
        description:
          "Previously a counsellor in a family service centre, she worked with individuals and families experiencing social difficulties, relationship problems, anger issues, grief and loss, educational stress, adjustment issues, workplace challenges, and more. Acknowledging that every client’s struggles are unique, Alyssa believes that counselling approaches should be tailored to each client’s situation.",
        years_of_practice: 20,
        education_qualification:
          "Master of Counselling (Monash University, Australia)",
        language_id: 3,
        admin: True,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("therapist", null, {});
  },
};
