const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerStorage");
const Controller = require("../controllers/mysql.controller");

router.post("/insert", upload, Controller.insert);

module.exports = router;
