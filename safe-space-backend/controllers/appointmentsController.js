const cors = require('cors');
// const BaseController = require("./baseController");

class AppointmentsController {
  constructor(model, clientModel, therapistModel) {
    this.model = model;
    this.clientModel = clientModel;
    this.therapistModel = therapistModel;
  }

  // get all appointments for therapist
  async getAll(req, res) {
    try {
      console.log('get all appointments!');
      const therapistId = req.params;
      const output = await this.model.findAll({
        where: {
          therapistId: therapistId,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get one appointment for therapist and client
  async getOne(req, res) {
    console.log('getone running');
    const apptId = req.params;
    try {
      const output = await this.model.findByPk(apptId);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //create one appointment for therapist and client
  async insertOne(req, res) {
    const { startDatetime, endDatetime, therapistId, clientId } = req.body;
    try {
      const newAppointment = await this.model.create({
        startDatetime: startDatetime,
        endDatetime: endDatetime,
        createdAt: new Date(),
        updatedAt: new Date(),
        therapistId: therapistId,
        clientId: clientId,
        currentTherapist: true,
      });
      return res.json(newAppointment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //update one appointment for client
  async updateOne(req, res) {
    const { apptId } = req.params;
    const { startDatetime, endDatetime } = req.body;
    try {
      const data = await this.model.findByPk(apptId);

      await data.update({
        startDatetime: startDatetime,
        endDatetime: endDatetime,
        updatedAt: new Date(),
      });

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //delete one appointment for client
  async deleteOne(req, res) {
    const { apptId } = req.params;
    try {
      const data = await this.model.findByPk(apptId);

      await data.destroy();

      return res.json(apptId);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = AppointmentsController;
