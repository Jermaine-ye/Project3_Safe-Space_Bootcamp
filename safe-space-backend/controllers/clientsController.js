const cors = require("cors");
const { Op } = require("sequelize");
// const BaseController = require("./baseController");

class ClientsController {
  constructor(
    model,
    therapistModel,
    clientTherapistsModel,
    appointmentModel,
    journalentryModel,
    specializationModel,
    specializationTherapistsModel
  ) {
    this.model = model;
    this.therapistModel = therapistModel;
    this.clientTherapistsModel = clientTherapistsModel;
    this.appointmentModel = appointmentModel;
    this.journalentryModel = journalentryModel;
    this.specializationModel = specializationModel;
    this.specializationTherapistsModel = specializationTherapistsModel;
  }

  // // get all appointments for client
  // async getAll(req, res) {
  //   try {
  //     console.log("get all appointments!");
  //     const { clientID } = req.body;
  //     const output = await this.appointmentModel.findAll({
  //       where: {
  //         clientId: clientID,
  //       },
  //     });
  //     return res.json(output);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  //get one client for therapist and client(for own profile). And get all journalentries and all appointments of the client. And get therapist info of current therapist for indiv client. And get all the clients_therapists info for indiv client.
  async getOne(req, res) {
    const { emailClient } = req.body;
    try {
      const user = await this.model.findOne({
        where: { email: email },
        include: [
          this.appointmentModel,
          this.journalentryModel,
          this.therapistModel,
        ],
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //update one client when therapist is dropped and set to new value when therapist is added. update one client when client is inactive. update one client after evaluation to change its preferences. update the description by the therapist of the indiv patient.
  //after evaluation form is submitted, we check if user has been authenticated. If user has been authenticated, we first run getOne, then we run updateOne to update particulars. If user not authenticated, we run insertOne to create account, then we run updateOne.
  //After that, we query therapist table to grab all therapists that fit the client's preferences and we bulkcreate clients_therapists? i.e. call insertBulk.
  //Separately, after initial sign up, users add their particulars and submit to database. This updateOne is called.
  async updateOneClient(req, res) {
    const {
      emailClient,
      firstName,
      lastName,
      phoneNumber,
      photoLink,
      age,
      gender,
      maritalStatus,
      therapistConfirmed,
      specializationId,
      genderPreference,
      ageId,
      languageId,
      religionId,
      dailymood,
      description,
      active,
    } = req.body;
    try {
      const data = await this.model.findOne({
        where: { email: emailClient },
      });
      const response = await data.update({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        photoLink: photoLink,
        ageClient: age,
        gender: gender,
        maritalStatus: maritalStatus,
        therapistConfirmed: therapistConfirmed,
        specializationId: specializationId,
        genderPreference: genderPreference,
        ageId: ageId,
        languageId: languageId,
        religionId: religionId,
        dailymood: dailymood,
        description: description,
        active: active,
      });
      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //update the junction table clients_therapists. Sometimes need to pair this with updateOneClient. Run this after evaluationform etc.

  async updateOneTherapistClient(req, res) {
    console.log("hi");
    const { chosenTherapist, endedAt, feedback, therapistID, clientID } =
      req.body;
    try {
      const data = await this.clientTherapistsModel.findOne({
        where: { clientId: clientID, therapistId: therapistID },
      });
      console.log(data);

      const response = await data.update({
        chosenTherapist: chosenTherapist,
        updatedAt: new Date(),
        endedAt: endedAt,
        feedback: feedback,
      });

      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //create one client upon signup
  async insertOne(req, res) {
    const { email, password } = req.body;
    try {
      const newClient = await this.model.create({
        email: email,
        password: password,
        active: true,
        admin: false,
      });
      return res.json(newClient);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //bulkCreate clients_therapists?
  //After that, we query therapist table to grab all therapists that fit the client's preferences and we bulkcreate clients_therapists?
  async insertBulk(req, res) {
    const {
      specializationID,
      ageId,
      religionId,
      gender,
      languageId,
      clientId,
    } = req.body;
    try {
      //allTherapists is an array of objects
      console.log("hi");
      const nextTherapists = await this.specializationTherapistsModel.findAll({
        where: {
          specializationId: specializationID,
          // "$specialize.specializationId$": specializationID,
        },
      });
      const secondSelectedTherapists = nextTherapists.map((elem) => {
        return elem.therapistId;
      });

      console.log(secondSelectedTherapists);

      const allTherapists = await this.therapistModel.findAll({
        where: {
          ageId: ageId,
          religionId: religionId,
          gender: gender,
          languageId: languageId,
          // specializationId: specializationID,
          // "$specialize.specializationId$": specializationID,
        },
        // include: [
        //   {
        //     // model: this.specializationTherapistsModel,
        //     through: {
        //       // model: this.specializationTherapistsModel,
        //       where: { specializationId: specializationID },
        //       attributes: ["specializationId"],
        //     },
        //   },
        // ],

        // include: "specialize",
        // include: [
        //   {
        //     model: this.specializationTherapistsModel,
        //     // required: true,
        //     as: "specialize",
        //     // where: {
        //     //   specializationId: specializationId,
        //     // },
        //   },
        // ],
      });

      const firstSelectedTherapists = allTherapists.map((elem) => {
        return elem.id;
      });

      console.log(firstSelectedTherapists);

      let finalTherapists = [];
      firstSelectedTherapists.forEach((therapist) => {
        if (secondSelectedTherapists.indexOf(therapist) !== -1) {
          console.log("yay");
          finalTherapists.push(therapist);
        }
      });

      console.log(finalTherapists);

      finalTherapists.map(async (therapist) => {
        // await console.log("indiv object", therapist);
        const newRelation = await this.clientTherapistsModel.create({
          clientId: clientId,
          therapistId: therapist,
          chosenTherapist: false,
          // endedAt: new Date(),
          //To remove endedAt non null from migration table.
        });
        return newRelation;
      });

      return res.json("inserted evaluation results into clientTherapistModel");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ClientsController;
