const service = require("./category.service");

const findAll = async (req, res) => {
  const categories = await service.findAll();
  res.send(categories);
};

const create = async (req, res) => {
  const category = req.body;

  if (!category || !category.name) {
    return res.status(400).send({ message: "Dados inválidos." });
  }

  const newCategory = await service.create(category);

  res.status(201).send(newCategory);
};

module.exports = {
  findAll,
  create,
};
