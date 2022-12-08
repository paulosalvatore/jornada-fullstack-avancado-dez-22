const Item = require("./item.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
  return Item.find().select({
    _id: true,
    name: true,
    imageUrl: true,
  });
};

const findById = (id) => {
  const objectId = new ObjectId(id);
  return Item.findById(objectId).populate("category");
};

const create = (item) => {
  return Item.create(item);
};

const update = (id, item) => {
  const objectId = new ObjectId(id);
  return Item.findByIdAndUpdate(objectId, item);
};

const deleteById = (id) => {
  const objectId = new ObjectId(id);
  return Item.findByIdAndDelete(objectId);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
