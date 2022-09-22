const cors = require('cors');
// const BaseController = require("./baseController");

class MemosController {
  constructor(model, clientModel, therapistModel) {
    this.model = model;
    this.clientModel = clientModel;
    this.therapistModel = therapistModel;
  }

  //get all memos of a particular client (for therapist)
  async getAll(req, res) {
    try {
      const clientId = req.params;
      const output = await this.model.findAll({
        where: {
          clientId: clientId,
        },
        order: ['created_at', 'DESC'],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get one memo of a particular client(for therapist)
  async getOne(req, res) {
    const { clientId, memoId } = req.params;
    try {
      const output = await this.model.findByPk(memoId.memoId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //create one memo for individual client (for therapist)
  async insertOne(req, res) {
    console.log('req.params: ', req.params);
    console.log('req.body: ', req.body);

    const clientId = req.params;
    console.log('clientId: ', clientId.clientId);
    const {
      therapistId,
      generalInput,
      behaviorInput,
      contenttherapyInput,
      therapeuticintInput,
      diagnosesInput,
      instructionsInput,
      riskfactorsInput,
    } = req.body;
    try {
      const newMemo = await this.model.create({
        createdAt: new Date(),
        clientId: clientId.clientId,
        therapistId: therapistId,
        generalInput: generalInput,
        behaviorInput: behaviorInput,
        contenttherapyInput: contenttherapyInput,
        therapeuticintInput: therapeuticintInput,
        diagnosesInput: diagnosesInput,
        instructionsInput: instructionsInput,
        riskfactorsInput: riskfactorsInput,
      });
      return res.json(newMemo);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = MemosController;
