const express = require("express");
const controller = require("./item.controller");

const router = express.Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findById);

module.exports = router;
