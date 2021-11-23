const Task = require("../model/Task");

class TaskController {
  async store(req, res) {
    console.log(req.body);
    const data = await Task.create(req.body);

    return res.json(data);
  }
  async list(req, res) {
    const data = await Task.find({});

    return res.json(data);
  }

  async get(req, res) {
      const data = await Task.findOne({id: req.params.id})
      return res.json(data);
  }

  async delete(req, res) {
      const data = await Task.deleteOne({id: req.params.id});

      return res.json(data);
  }

  async put(req, res) {
    const data = await Task.findOneAndUpdate({id: req.params.id}, req.body);

    return res.json(data);
  }

  async search(req, res) {
    console.log(req.query.text);
    const data = await Task.find({text:{'$regex' : req.query.text, '$options' : 'i'}});
    return res.json(data);
  }

}

module.exports = new TaskController();