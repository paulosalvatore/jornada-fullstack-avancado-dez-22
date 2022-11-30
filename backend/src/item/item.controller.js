const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
  const items = [];
  res.send(items);
};

const findById = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = undefined;

  if (!item) {
    return res.status(404).send({ message: "Item não encontrado." });
  }

  res.send(item);
};

module.exports = {
  findAll,
  findById,
};
