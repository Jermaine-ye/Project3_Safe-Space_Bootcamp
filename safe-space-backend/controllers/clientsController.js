const cors = require("cors");
// const BaseController = require("./baseController");

class ClientsController {
  constructor(
    model,
    therapistModel,
    clientsTherapistsModel,
    appointmentModel,
    journalentryModel
  ) {
    this.model = model;
    this.therapistModel = therapistModel;
    this.clientsTherapistsModel = clientsTherapistsModel;
    this.appointmentModel = appointmentModel;
    this.journalentryModel = journalentryModel;
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
        where: { email: emailClient },
        include: [
          this.appointmentModel,
          this.journalentryModel,
          this.therapistModel,
          this.clientsTherapistsModel,
        ],
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //update one client when therapist is dropped and set to new value when therapist is added. update one client when client is inactive. update one client after evaluation to change its preferences. update the junction table clients_therapists. update the description by the therapist of the indiv patient.
  //after evaluation form is submitted, we check if user has been authenticated. If user has been authenticated, we first run getOne, then we run updateOne to update particulars. If user not authenticated, we run insertOne to create account, then we run updateOne.
  //After that, we query therapist table to grab all therapists that fit the client's preferences and we bulkcreate clients_therapists? i.e. call insertBulk.
  //Separately, after initial sign up, users add their particulars and submit to database. This updateOne is called.
  async updateOne(req, res) {
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
      agepreferenceId,
      languageId,
      religionId,
      dailymoodId,
      description,
      active,
      chosenTherapy,
      createdAt,
      endedAt,
      feedback,
    } = req.body;
    try {
      const data = await this.model.findOne({
        where: { email: emailClient },
      });

      await data.update(
        {
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
          agepreferenceId: agepreferenceId,
          languageId: languageId,
          religionId: religionId,
          dailymoodId: dailymoodId,
          description: description,
          active: active,
        },
        {
          through: {
            chosenTherapy: chosenTherapy,
            createdAt: createdAt,
            endedAt: endedAt,
            feedback: feedback,
          },
        }
      );

      return res.json(data);
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
      specializationId,
      ageId,
      religionId,
      gender,
      languageId,
      clientId,
    } = req.body;
    try {
      //allTherapists is an array of objects
      const allTherapists = await this.therapistModel.findAll({
        where: {
          agerangeId: ageId,
          religionId: religionId,
          gender: gender,
          languageId: languageId,
        },
        include: [
          {
            model: this.clientsTherapistsModel,
            where: {
              specializationId: specializationId,
            },
          },
        ],
      });

      const resultTherapist = allTherapists.map(async (therapist) => {
        const newRelation = await this.clientsTherapistsModel.create({
          clientId: clientId,
          therapistId: therapist.therapistId,
          chosenTherapy: false,
        });
        return newRelation;
      });

      return res.json(resultTherapist);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ClientsController;
