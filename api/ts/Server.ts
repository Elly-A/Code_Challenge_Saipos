const express = require('express');
const Connection = require('./db/Connection');

const connection = new Connection(
  Connection.createConnectionWith('todos')
);

connection.createDatabase('todos');

class App {
  public express

  constructor() {
    this.express = express;
    this.mountRoutes();
  }

  private mountRoutes() {
    const router = express.Router()
    router.get('/', (req, res) => {

      res.json({
        message: 'Hello World!'
      })
    });
    this.express.use('/', router);
  }
}

export default new App().express;