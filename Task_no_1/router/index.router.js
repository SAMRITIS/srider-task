const express = require("express");
const router = express.Router();

const index = require("../controller/index.controller");

router.get("/", index.get_data);

module.exports = router;
