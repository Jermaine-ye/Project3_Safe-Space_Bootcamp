"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recommendationarticles", [
      {
        // id: 1,
        title: "Why Do I Feel Sad for No Reason?",
        author: "Safe-Space Editorial Team",
        content:
          "Having seen mental illnesses frequently mentioned in mainstream media, you may be wondering (Am I  sad or depressed?) When we think about feeling unexplained sadness, depression is a common mental health issue that comes to mind. It is important to distinguish, however, between bouts of sadness and long-term mental health conditions, such as depression. An awareness of the difference between sadness and depression allows us to better assess the type of professional support that would be beneficial for us. Depression is characterised by persistent feelings of sadness, feelings of worthlessness, and a loss of interest in daily activities (American Psychiatric Association, 2016). It is a debilitating condition that interferes with an individual’s daily functioning. In contrast, feelings of sadness tend to be short-term in nature, and are not accompanied by other depressive symptoms.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        title: "Do I Need Therapy?",
        author: "Safe-Space Editorial Team",
        content:
          "Nobody is expected to be in control of our emotions all the time. Feeling sad, distressed, or angry from time to time is only human. However, if you have been feeling persistently overwhelmed by negative emotions and find it hard to manage them, it may be a sign to seek professional help. Grappling with intense emotions for an extended period of time often has adverse impacts on many other aspects of your life. For instance, you may let your anger get the better of you and exhibit hostility towards your loved ones. In such cases, going for therapy would be beneficial as a therapist is equipped with the skills and resources to help you work through your emotions and cope with them.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        title: "The Stigma Around Mental Health Issues?",
        author: "Safe-Space Editorial Team",
        content:
          "A recent survey by the Institute of Mental Health (IMH), revealed that “one in seven people in Singapore has experienced a mood, anxiety or alcohol use disorder in their lifetime”.The study further highlights the existing problem of a “treatment gap”, in which the majority of people suffering from such mental health issues did not seek professional treatment. According to the study, this could be due to two reasons.  First, the failure to recognise the symptoms and second, the stigma around mental health issues.The results suggest that although having a mental health condition is not uncommon in Singapore, it unfortunately remains a misunderstood and taboo subject.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 4,
        title: "How Long Does Grief Last",
        author: "Safe-Space Editorial Team",
        content:
          "While grieving, it can feel like our pain will last forever. You might wonder, does grief ever go away? When and how does grief end? Unfortunately, there are no simple answers as grief is both complex and personal. So then how do we cope with grief? How does grief change over time? What are some self-care tips for coping with grief? Loss is part-and-parcel of life. We all experience it at some point. Grieving is a natural response to this loss. In fact, coping with the loss of a loved one is one of the most challenging experiences we face in life. In the moment, grief can feel insurmountable. However, the feelings of loss generally diminish over time. It is important to remember that everyone has their own timeline for grieving. Moreover, we all cope and react to grief in our own way. Another person’s grief can appear different from your own. But both your expression of grief and theirs are valid.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 5,
        title: "Anger Management Books",
        author: "Safe-Space Editorial Team",
        content:
          "Anger can be a difficult emotion for us to manage, yet it is not an uncommon one to feel. Sometimes, it arises when we are snubbed at the workplace. Other times, it creeps up on us when a family member forgets to do the dishes. It can even strike when we miss the bus. When faced with unfavourable circumstances, anger is a normal and healthy emotion. However, our anger can have a destructive impact on our relationships if we simply act in accordance to how we feel. Besides, getting angry more frequently has been correlated with having a higher risk of cardiovascular diseases (Reitman, 2020). One solution worth exploring is seeking means to manage our own anger. This would mean reducing the intensity of feelings of anger and our physiological reaction to them (American Psychological Association, 2021). Self-help books are readily available sources of information that can help us to better manage our anger.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 6,
        title: "Dopamine Detox: Does It Work?",
        author: "Safe-Space Editorial Team",
        content: `What is a dopamine detox? To address this, let us begin by introducing what dopamine is. Dopamine is a neurotransmitter that is made in your brain, and neurotransmitters are chemical messengers in your body. Simply put, they transport messages across spaces (ie synapses), from a nerve cell to another nerve, muscle, or cell. Dopamine plays a role in various crucial bodily functions. Examples include cognition, memory, focus and attention, movement, behaviour, mood, thinking and planning, and reward and motivation. Dopamine is also a vasodilator, meaning that it helps blood vessels expand and constrict. On top of that, dopamine is associated with your body’s sodium and insulin levels, and lymphocyte activity. Links have been found between too high or too low levels of dopamine and both mental health and physical health conditions. Conditions associated with lower than usual levels of dopamine include depression, Parkinson’s Disease, Attention Deficit Hyperactivity Disorder (ADHD), and restless leg syndrome. With low levels of dopamine, one might feel moody, tired, and unmotivated. Conditions tied to higher than usual levels of dopamine include obesity, mania, and addiction. Someone with high levels of dopamine might feel energised and euphoric. However, the downsides might be difficulty sleeping and poor impulse control. A person with a good level of dopamine might feel motivated, focused, and happy.Dopamine is often associated with feelings of pleasure and wellbeing. You’ve probably heard that dopamine is a “happy hormone”. But what does that really mean? How does it work? Let us dive a little deeper into this. It is all about rewards. This much is true. But this is also where misconceptions start.`,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recommendationarticles", null, {});
  },
};
