const express = require("express");
const router = express.Router();

class TherapistsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get all clients(for therapist)
    router.get(
      "/clients/:email",
      // this.auth,
      this.controller.getAll.bind(this.controller)
    );

    //get one therapist (for therapist own profile) and can get all blocked dates (for client and therapist)
    router.get(
      "/:emailTherapist",
      // this.auth,
      this.controller.getOne.bind(this.controller)
    );

    //for consultation sample
    // router.post(
    //   '/:emailTherapist',
    //   // this.auth,
    //   this.controller.postOne.bind(this.controller)
    // );

    //create one blocked date (for therapist)
    router.post(
      "/blockeddate",
      this.controller.insertOne.bind(this.controller)
    );

    //delete one blocked date (for therapist)
    router.delete(
      "/:blockeddateId",
      this.controller.deleteOne.bind(this.controller)
    );

    return router;
  }
}

module.exports = TherapistsRouter;
