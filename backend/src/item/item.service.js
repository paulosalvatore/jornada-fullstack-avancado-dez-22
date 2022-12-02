const Item = require("./item.model");

const findAll = () => {
  return Item.find();
};

const create = (item) => {
  return Item.create(item);
};

module.exports = {
  findAll,
  create,
};
