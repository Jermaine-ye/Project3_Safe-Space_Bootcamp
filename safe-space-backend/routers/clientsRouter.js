const express = require("express");
const router = express.Router();

class ClientsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get one client (for both client own profile and therapist)
    router.get(
      "/:email",
      // this.auth,
      this.controller.getOne.bind(this.controller)
    );

    router.get(
      "/key/:clientId",
      this.controller.getOnePk.bind(this.controller)
    );

    //get all clients
    router.get(`/`, this.controller.getAll.bind(this.controller));

    //update one client (for both client and therapist)
    router.put("/", this.controller.updateOneClient.bind(this.controller));

    //update one clientTherapist (for both client and therapist)
    router.put(
      "/clientTherapist",
      this.controller.updateOneTherapistClient.bind(this.controller)
    );

    //create one client (for client)
    router.post("/newClient", this.controller.insertOne.bind(this.controller));

    //bulkCreate many clients_therapists for client after evaluation results are out
    router.post(
      "/therapists",
      this.controller.insertBulk.bind(this.controller)
    );

    return router;
  }
}

module.exports = ClientsRouter;
