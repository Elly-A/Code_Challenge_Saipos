const mysql = require('mysql');
const SQLOperationsEnum = require('./enums/SQLOperationsEnum');
import { QueryInterface } from './interfaces/QueryInterface';

const _ = SQLOperationsEnum;

class Connection {

  private connection;

  constructor(connection) {
    this.connection = connection;
  }

  private connect() {
    this.connection.connect();
  }

  private query(sqlString: QueryInterface['sqlString'], callback: QueryInterface['callback']) {
    this.connection.query(sqlString, callback);
  }

  createDatabase(name: string) {
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

  private end() {
    this.connection.end();
  }

  /**
   * @param database database name to be used
   * @returns a connection object for usage with DB
   */
  static createConnectionWith(databaseName: string) {
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