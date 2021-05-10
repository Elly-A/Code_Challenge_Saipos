const StringBuilder = require('../util/StringBuilder');
const {
  FROM, ADD, AFTER, ALTER, AS, CHARSET, CREATE, DATABASE,
  DEFAULT, DELETE, DROP, ENGINE, INSERT, INTO, SELECT, TABLE,
  USE, VALUES, WHERE, SET, UPDATE } = require('./enums/SQLOperationsEnum');

const value = StringBuilder.value;

class Database {

  connection;
  databaseName;
  tableName;

  constructor(
    connection,
    databaseName,
    tableName
  ) {
    this.connection = connection;
    this.databaseName = databaseName;
    this.tableName = tableName;
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async getAll() {
    const query = StringBuilder.build(
      SELECT, '*', FROM, this.tableName, ';'
    );

    return await this.connection.query(query);
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async get(id) {
    const query = StringBuilder.build(
      SELECT, '*', FROM, this.tableName, WHERE, 'id=' + id, ';'
    );

    return await this.connection.query(query);
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async add(todo) {
    const query = StringBuilder.build(
      INSERT, INTO, this.databaseName, ' (createdByName, createdByEmail, content, timesCompleted, timesEdited, isCompleted, isPinned) ', VALUES,
      '(', value(todo.createdByName) + ',', value(todo.createdByEmail) + ',', value(todo.content) + ',', todo.timesCompleted + ',', todo.timesEdited + ',', (todo.isCompleted ? 1 : 0) + ',', (todo.isPinned ? 1 : 0), ');',
    );

    return await this.connection.query(query);
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async update(todo, id) {
    const query = StringBuilder.build(
      UPDATE, this.tableName, SET,
      'content=' + value(todo.content) + ',',
      'timesCompleted=' + value(todo.timesCompleted) + ',',
      'timesEdited=' + value(todo.timesEdited) + ',',
      'isCompleted=' + (todo.isCompleted ? 1 : 0) + ',',
      'isPinned=' + (todo.isPinned ? 1 : 0) + ' ',
      WHERE, 'id=' + id
    );

    return await this.connection.query(query);
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async remove(id) {
    const query = StringBuilder.build(
      DELETE, FROM, this.tableName, WHERE, 'id=' + id + ';'
    );

    return await this.connection.query(query);
  }

  /**
   * @returns Promise<[T, mysql.FieldPacket]>
   */
  async createTable(tableName, values) {
    const query = StringBuilder.build(
      CREATE, TABLE, tableName, values, ';'
    );

    return await this.connection.query(query);
  }
}

module.exports = Database;