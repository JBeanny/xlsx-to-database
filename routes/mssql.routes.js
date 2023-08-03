const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerStorage");
const Controller = require("../controllers/mssql.controller");

router.post("/insert", upload, Controller.insert);

module.exports = router;
