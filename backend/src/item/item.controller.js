const service = require("./item.service");
const { isObjectIdValid } = require("../db/database.helper");

const findAll = async (req, res) => {
  const items = await service.findAll();
  res.send(items);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = await service.findById(id);

  if (!item) {
    return res.status(404).send({ message: "Item não encontrado." });
  }

  res.send(item);
};

const create = async (req, res) => {
  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados inválidos." });
  }

  const newItem = await service.create(item);

  res.status(201).send(newItem);
};

const update = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }

  const updatedItem = await service.update(id, item);

  if (!updatedItem) {
    return res.status(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item atualizado com sucesso!" });
};

const deleteById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const deletedItem = await service.deleteById(id);

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
