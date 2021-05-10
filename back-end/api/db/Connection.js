const mysql = require('mysql');
const SQLOperationsEnum = require('./enums/SQLOperationsEnum');

const _ = SQLOperationsEnum;

class Connection {

  connection;

  constructor(connection) {
    this.connection = connection;
  }

  connect() {
    this.connection.connect();
  }

  query(sqlString, callback) {
    this.connection.query(sqlString, callback);
  }

  createDatabase(name) {
    this.connect();

    this.query(
      `${_.CREATE} ${_.DATABASE} ${name};`,
      (error, result, fields) => {
        if (error) {
          throw new Error(error);
        }

        console.log(result);
        console.log(fields);

        this.end();
      }
    )
  }

  end() {
    this.connection.end();
  }

  /**
   * @param database database name to be used
   * @returns a connection object for usage with DB
   */
  static createConnectionWith(databaseName) {
    const host = process.env.HOST;
    const user = process.env.MYSQLUSER;
    const password = process.env.MYSQLPW;

    return mysql.createConnection({
      host,
      user,
      password,
      database: databaseName
    });
  }

}

exports.Connection = Connection;