const express = require("express");
const router = express.Router();

class JournalsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all journals of a particular client (for therapist)
    router.get("/:clientId", this.controller.getAll.bind(this.controller));
    //get one journal of a particular client(for therapist and client?)
    router.get(
      "/:clientId/:journalId",
      this.controller.getOne.bind(this.controller)
    );
    //create one journal assignment for individual client using journal template (for therapist)
    router.post("/:clientId", this.controller.insertOne.bind(this.controller));
    //update one journal (for client)
    router.put("/:journalId", this.controller.updateOne.bind(this.controller));
    return router;
  }
}

module.exports = JournalsRouter;
