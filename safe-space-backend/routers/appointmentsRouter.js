const express = require('express');
const router = express.Router();

class AppointmentsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get one appt (for both therapist and client)
    router.get('/:apptId', this.controller.getOne.bind(this.controller));
    //update one appt (for client)
    router.put('/:apptId', this.controller.updateOne.bind(this.controller));
    //delete one appt (for client)
    router.delete('/:apptId', this.controller.deleteOne.bind(this.controller));
    //get all appts (for therapist)
    router.get('/:therapistId', this.controller.getAll.bind(this.controller));
    //create one appt (for both therapist and client)
    router.post('/', this.controller.insertOne.bind(this.controller));

    return router;
  }
}

module.exports = AppointmentsRouter;
