const Item = require("./item.model");

const findAll = () => {
  return Item.find().select("_id name imageUrl");
};

const create = (item) => {
  return Item.create(item);
};

module.exports = {
  findAll,
  create,
};
