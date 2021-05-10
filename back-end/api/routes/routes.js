const path = require('path');
const validate = require('../middleware/validate');
const { validateTodo } = require('../models/Todo');
const { todoDB } = require('../db/todoDatabase');

const cleanTodo = require('../util/cleanTodo');

const todoFrontEndPath = path.join(__dirname, '../../../', 'front-end', 'dist', 'todo-list');

function getRoutes(router) {
  router.get('/', [], async (req, res) => {
    res.sendFile('/index.html');
  });

  router.get('/todos/', [], async (req, res) => {
    const db = await todoDB;
    const todos = (await db.getAll())[0];
    const cleanedTodos = [];

    todos.forEach(todo => {
      cleanedTodos.push(cleanTodo(todo));
    });

    res.status(200).json(cleanedTodos);
  });

  router.get('/todos/:id', [], async (req, res) => {
    const db = await todoDB;

    try {
      db.get(req.params.id)
        .then(todo => {
          res.status(200).json(cleanTodo(todo));
        })
        .catch(error => {
          res.status(404).json(error);
        });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.post('/todos/add', [validate(validateTodo)], async (req, res) => {
    const db = await todoDB;

    try {
      const response = await db.add(req.body);
      const newId = response[0].insertId;
      const todo = (await db.get(newId))[0][0];

      res.status(200).json(cleanTodo(todo));
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.put('/todos/:id', [validate(validateTodo)], async (req, res, next) => {
    const db = await todoDB;

    try {
      db.update(req.body, req.params.id)
        .then(_ => {
          res.status(204).json();
        }).catch(error => {
          res.status(404).json(error);
        });
    } catch (e) {
      res.status(500).json(e);
    }
  });
}

exports.getRoutes = getRoutes;
exports.todoFrontEndPath = todoFrontEndPath;