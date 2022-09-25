const cors = require("cors");
// const BaseController = require("./baseController");

class JournalsController {
  constructor(model, journaltemplateModel, clientModel, therapistModel) {
    this.model = model;
    this.journaltemplateModel = journaltemplateModel;
    this.clientModel = clientModel;
    this.therapistModel = therapistModel;
  }

  async getAll(req, res) {
    try {
      const clientId = req.params;
      const output = await this.model.findAll({
        where: {
          clientId: clientId,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get one journal of a particular client(for therapist and client?)
  async getOne(req, res) {
    const { clientId, journalId } = req.params;
    try {
      const output = await this.model.findByPk(journalId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //create one journal assignment for individual client using journal template id (for therapist)
  async insertOne(req, res) {
    const { clientId } = req.params;
    console.log(clientId);
    const { dueBy, templateId, therapistId } = req.body;
    try {
      const newJournal = await this.model.create({
        createdAt: new Date(),
        dueBy: dueBy,
        journaltemplateId: templateId,
        clientId: clientId,
        therapistId: therapistId,
      });
      return res.json(newJournal);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //update one journal for client
  async updateOne(req, res) {
    const { journalId } = req.params;
    const { input1, input2, input3 } = req.body;
    try {
      const data = await this.model.findByPk(journalId);

      await data.update({
        input1: input1,
        input2: input2,
        input3: input3,
        updatedAt: new Date(),
      });

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = JournalsController;
