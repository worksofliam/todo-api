var express = require('express'),
    router = express.Router();

const TodoList = require('../classes/todolist');

router.get('/', (req, res) => {
  var list = new TodoList(req.session.username);

  res.json(list.getAll());
});

router.post('/add', (req, res) => {
  var list = new TodoList(req.session.username);

  const content = req.body.content;

  if (content) {
    list.add(content);
    res.json({
      success: true,
      message: "Content added!"
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Missing content for todo list."
    });
  }
});

router.delete('/delete', (req, res) => {
  var list = new TodoList(req.session.username);

  const id = req.query.id;

  if (id) {
    if (list.remove(Number(id))) {
      res.json({
        success: true,
        message: "Item removed."
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Index on to do list does not exist."
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Missing query id for todo list."
    });
  }
});

router.get('/clear', (req, res) => {
  var list = new TodoList(req.session.username);

  list.clear();

  res.json({
    success: true,
    message: "List cleared."
  });
});

module.exports = router;