
const Database = require('./Database');
const Connection = require('./Connection');

/**
 * Retorna uma instância de banco de dados de TODOS
 * @see Database
 * @returns Database
 */
async function getDB() {
  const todoDB = new Database(
    await Connection.getConnection('todos'),
    'todos',
    'todos'
  );

  return todoDB;
}

exports.todoDB = getDB();
