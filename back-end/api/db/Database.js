const StringBuilder = require('../util/StringBuilder');
const SQLOperationsEnum = require('./enums/SQLOperationsEnum');
const _ = SQLOperationsEnum;

class Database {

  connection;
  databaseName;

  constructor(
    connection,
    databaseName
  ) {
    this.connection = connection;
    this.databaseName = databaseName;
  }

  getAll() {
    const query = StringBuilder.build(
      _.SELECT, '*', _.FROM, this.databaseName, ';'
    );

    return this.connection.query(query);
  }

  get() {

  }

  async add(todo) {
    const query = StringBuilder.build(
      `
        ${_.INSERT + _.INTO + this.databaseName + ' (createdByName, createdByEmail, content, timesCompleted, timesEdited, isCompleted, isPinned) ' + _.VALUES}
        ("${todo.createdByName}", "${todo.createdByEmail}", "${todo.content}", "${todo.timesCompleted}", "${todo.timesEdited}", "${todo.isCompleted ? 1 : 0}", "${todo.isPinned ? 1 : 0}"); 
      `
    );

    return await this.connection.query(query);
  }

  update() {

  }

  remove() {

  }

  createTable(tableName, values) {
    const query = StringBuilder.build(
      _.CREATE, _.TABLE, tableName, values, ';'
    );

    return this.connection.query(query);
  }
}

module.exports = Database;