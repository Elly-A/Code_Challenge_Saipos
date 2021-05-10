const express = require('express');
const Connection = require('./db/Connection');

const connection = new Connection(
  Connection.createConnectionWith('todos')
);

connection.createDatabase('todos');

class App {
  express;

  constructor() {
    this.express = express;
    this.mountRoutes();
  }

  mountRoutes() {
    const router = express.Router();

    router.get('/', (req, res) => {

      res.json({
        message: 'Hello World!'
      });

    });
    this.express.use('/', router);
  }
}

exports.app = new App().express;
