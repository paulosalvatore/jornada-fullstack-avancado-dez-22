const Item = require("./item.model");

const findAll = () => {
  return Item.find();
};

module.exports = {
  findAll,
};
