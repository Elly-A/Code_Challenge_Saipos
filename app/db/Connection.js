const mysql = require('mysql2/promise');

// COLOCADAS AQUI, PORÉM NO DEPLOY SERÃO COLOCADAS NO AMBIENTE
process.env.HOST = '127.0.0.1';
process.env.SQLPORT = 3306;
process.env.MYSQLUSER = 'dani';
process.env.MYSQLPW = 'senhasuperdificil';

class Connection {
  /**
   * Retorna uma promessa de conexão com MYSQL
   * @param databaseName [STRING] - nome do banco de dados a se conectar
   * @returns Promise<mysql.Connection>
   */
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