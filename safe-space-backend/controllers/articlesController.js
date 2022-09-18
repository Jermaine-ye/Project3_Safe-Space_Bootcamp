const cors = require("cors");
const BaseController = require("./baseController");

class ArticlesController extends BaseController {
  constructor(model) {
    super(model);
  }
}

module.exports = ArticlesController;
