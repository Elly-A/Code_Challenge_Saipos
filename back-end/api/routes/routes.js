const path = require('path');
const validate = require('../middleware/validate');
const { validateTodo } = require('../models/Todo');
const { todoDB } = require('../db/todoDatabase');

const todoFrontEndPath = path.join(__dirname, '../../../', 'front-end', 'dist', 'todo-list');

function getRoutes(router) {
  router.get('/', [], async (req, res) => {
    res.sendFile('/index.html');
  });

  router.get('/todos/', [], async (req, res) => {
    const db = await todoDB;
    let todos = await db.getAll();
    res.status(200).send(todos);
  });

  router.post('/todos/add', [validate], async (req, res) => {
    const db = await todoDB;
    let todo = await db.add(req.body);
    res.status(200).send(todo);
  });
}

exports.getRoutes = getRoutes;
exports.todoFrontEndPath = todoFrontEndPath;