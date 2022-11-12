const cors = require("cors");
const BaseController = require("./baseController");

class ClientsController extends BaseController {
  constructor(
    model,
    therapistModel,
    clientTherapistsModel,
    appointmentModel,
    journalentryModel,
    specializationModel,
    specializationTherapistsModel,
    memoentryModel
  ) {
    super(model);
    this.therapistModel = therapistModel;
    this.clientTherapistsModel = clientTherapistsModel;
    this.appointmentModel = appointmentModel;
    this.journalentryModel = journalentryModel;
    this.specializationModel = specializationModel;
    this.specializationTherapistsModel = specializationTherapistsModel;
    this.memoentryModel = memoentryModel;
  }

  //get one client for therapist and client(for own profile). And get all journalentries and all appointments of the client. And get therapist info of current therapist for indiv client. And get all the clients_therapists info for indiv client.
  async getOne(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne({
        where: { email: email },
        include: [
          { model: this.appointmentModel, include: [this.therapistModel] },
          { model: this.journalentryModel, include: [this.therapistModel] },
          this.therapistModel,
          this.memoentryModel,
        ],
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOnePk(req, res) {
    const { clientId } = req.params;
    try {
      const output = await this.model.findByPk(clientId);
      return res.json(output);
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
    const { chosenTherapist, endedAt, feedback, therapistID, clientID } =
      req.body;
    try {
      const data = await this.clientTherapistsModel.findOne({
        where: { clientId: clientID, therapistId: therapistID },
      });

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
      const newClient = await this.model.findOrCreate({
        where: { email: email },
        defaults: {
          password: password,
          active: true,
          admin: false,
        },
      });
      return res.json(newClient);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //bulkCreate clients_therapists?
  //After that, we query therapist table to grab all therapists that fit the client's preferences and we bulkcreate clients_therapists
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
      const nextTherapists = await this.specializationTherapistsModel.findAll({
        where: {
          specializationId: specializationID,
        },
      });
      const secondSelectedTherapists = nextTherapists.map((elem) => {
        return elem.therapistId;
      });

      const allTherapists = await this.therapistModel.findAll({
        where: {
          ageId: ageId,
          religionId: religionId,
          gender: gender,
          languageId: languageId,
        },
      });

      const firstSelectedTherapists = allTherapists.map((elem) => {
        return elem.id;
      });

      let finalTherapists = [];
      firstSelectedTherapists.forEach((therapist) => {
        if (secondSelectedTherapists.indexOf(therapist) !== -1) {
          finalTherapists.push(therapist);
        }
      });

      finalTherapists.map(async (therapist) => {
        const newRelation = await this.clientTherapistsModel.create({
          clientId: clientId,
          therapistId: therapist,
          chosenTherapist: false,
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
