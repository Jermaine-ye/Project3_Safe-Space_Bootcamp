const express = require("express");
const router = express.Router();

class MemosRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all memos of a particular client (for therapist)
    router.get("/:clientId", this.controller.getAll.bind(this.controller));
    //get one memo of a particular client(for therapist)
    router.get("/:memoId", this.controller.getOne.bind(this.controller));
    //create one memo for individual client (for therapist)
    router.post("/:clientId", this.controller.insertOne.bind(this.controller));
    return router;
  }
}

module.exports = MemosRouter;
