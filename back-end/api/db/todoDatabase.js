
const Database = require('./Database');
const Connection = require('./Connection');

async function getDB() {
  const todoDB = new Database(
    await Connection.getConnection('todos'),
    'todos'
  );

  return todoDB;
}

exports.todoDB = getDB();
