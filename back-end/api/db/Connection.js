const mysql = require('mysql2/promise');

process.env.HOST = '127.0.0.1';
process.env.SQLPORT = 3306;
process.env.MYSQLUSER = 'dani';
process.env.MYSQLPW = '1030774';

class Connection {
  static async getConnection(databaseName) {
    const host = process.env.HOST;
    const user = process.env.MYSQLUSER;
    const port = process.env.SQLPORT;
    const password = process.env.MYSQLPW;

    const connection = await mysql.createConnection({
      host,
      user,
      password,
      port,
      database: databaseName
    });

    return connection;
  }
}

module.exports = Connection;