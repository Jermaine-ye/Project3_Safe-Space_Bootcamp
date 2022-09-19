const express = require("express");
const router = express.Router();

class ArticlesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get all articles (for landing page)
    router.get("/", this.controller.getAll.bind(this.controller));
    //get one article (for landing page and client)
    router.get("/:articleId", this.controller.getOne.bind(this.controller));

    return router;
  }
}

module.exports = ArticlesRouter;
