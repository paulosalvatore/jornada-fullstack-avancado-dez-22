const service = require("./item.service");
const { isObjectIdValid } = require("../db/database.helper");

const findAll = async (req, res) => {
  const items = await service.findAll();
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

const create = (req, res) => {
  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados inválidos." });
  }

  const newItem = {};

  res.status(201).send(newItem);
};

const update = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }

  const updatedItem = {};

  if (!updatedItem) {
    return res.send(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item atualizado com sucesso!" });
};

const deleteById = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const deletedItem = {};

  if (!deletedItem) {
    return res.status(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item excluído com sucesso!" });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
