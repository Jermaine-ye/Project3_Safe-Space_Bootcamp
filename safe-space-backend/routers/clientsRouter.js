const express = require("express");
const router = express.Router();

class ClientsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    // //get all appointments (for client)
    // router.get(
    //   "/appts",
    //   this.auth,
    //   this.controller.getAll.bind(this.controller)
    // );

    //get all clients_therapists (for client to rechoose) <<< just do getOne client and do junction table include. Dont do getallclients_therapist

    //get one client (for both client own profile and therapist)
    router.get(
      "/:email",
      // this.auth,
      this.controller.getOne.bind(this.controller)
    );

    //update one client (for both client and therapist)
    router.put("/", this.controller.updateOneClient.bind(this.controller));

    //update one clientTherapist (for both client and therapist)
    router.put(
      "/clientTherapist",
      this.controller.updateOneTherapistClient.bind(this.controller)
    );

    //create one client (for client)
    router.post("/", this.controller.insertOne.bind(this.controller));

    //bulkCreate many clients_therapists for client after evaluation results are out
    router.post(
      "/therapists",
      this.controller.insertBulk.bind(this.controller)
    );

    return router;
  }
}

module.exports = ClientsRouter;
