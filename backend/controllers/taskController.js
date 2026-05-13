const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updateTask = async (req, res) => {
  try {
    await Task.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};