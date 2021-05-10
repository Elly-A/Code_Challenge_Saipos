const express = require('express');

const { getRoutes, todoFrontEndPath } = require('./routes/routes');

class App {
  express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  mountRoutes() {
    const router = express.Router();
    getRoutes(router);

    this.express.use(express.json())
    this.express.use(express.static(todoFrontEndPath));
    this.express.use('/', router);
  }
}

module.exports = new App().express;
