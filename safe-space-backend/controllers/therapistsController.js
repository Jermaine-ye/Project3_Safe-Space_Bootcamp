const cors = require("cors");
// const BaseController = require("./baseController");

class TherapistsController {
  constructor(model, clientModel, blockedDateModel, clientTherapistsModel) {
    this.model = model;
    this.clientModel = clientModel;
    this.blockedDateModel = blockedDateModel;
    this.clientTherapistsModel = clientTherapistsModel;
  }

  // get all clients for therapist
  async getAll(req, res) {
    try {
      const { email } = req.body;
      //getting therapist user obj
      const user = await this.model.findOne({
        where: { email: email },
      });
      console.log(user);
      //getting id of therapist
      const { id } = user;

      // const { therapistID } = req.body;
      const output = await this.clientTherapistsModel.findAll({
        where: {
          therapistId: id,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get one therapist for therapist own profile and get all blocked dates for therapist and client
  async getOne(req, res) {
    const { therapistId } = req.params;
    try {
      const output = await this.model.findByPk(therapistId, {
        include: this.blockedDateModel,
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //create one blocked date for therapist
  async insertOne(req, res) {
    const { blockedDate, therapistId } = req.body;
    try {
      const newBlockedDate = await this.blockedDateModel.create({
        blockedDate: blockedDate,
        therapistId: therapistId,
      });
      return res.json(newBlockedDate);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //delete one blocked date for therapist
  async deleteOne(req, res) {
    const { blockeddateId } = req.params;
    try {
      const data = await this.blockedDateModel.findByPk(blockeddateId);

      await data.destroy();

      return res.json(blockeddateId);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = TherapistsController;
