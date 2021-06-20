var express = require("express");
var router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  updateTodoDone,
  deleteTodo,
  sortTodoByDate,
  sortTodoByDone,
} = require("./controller/todoController");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(true);
});
router.get("/get-all-todos", getAllTodos);
router.post("/create-todo", createTodo);
router.put("/update-todo-by-id/:id", updateTodo);
router.put("/update-done-by-id/:id", updateTodoDone);
router.delete("/delete-todo-by-id/:id", deleteTodo);
router.get("/get-todos-by-sort", sortTodoByDate);
router.get("/get-todos-by-done", sortTodoByDone);
module.exports = router;




