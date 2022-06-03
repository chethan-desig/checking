const referss = require("../models/refercandidate");
const refercltr = {};

refercltr.list = (req, res) => {
  referss
    .find()
    .then((positions) => {
      res.json(positions);
    })

    .catch((err) => {
      res.json(err.message);
    });
};
refercltr.create = (req, res) => {
  const body = req.body;
  const task = new referss(body);
  task
    .save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
refercltr.show = (req, res) => {
  const id = req.params.id;

  referss
    .findById(id)
    .then((positions) => {
      res.json(positions);
    })
    .catch((err) => {
      res.json(err);
    });
};
refercltr.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const body = req.body;
  referss
    .findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((positions) => {
      res.json(positions);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = refercltr;
