const express = require("express");
const app = express();
const { connectToDatabase, insertToDatabase } = require("./configs/db");
const excelDataConverter = require("./utils/excelConverter");
const upload = require("./middlewares/multerStorage");

connectToDatabase();

app.post("/api/v1/xlsx/insert", upload, (req, res) => {
  try {
    const data = excelDataConverter(req.file.buffer);
    const table = req.body.table_name;

    data.forEach((record) => {
      insertToDatabase(record, table);
    });

    res.status(200).json({
      status: 200,
      message: "You have Succcessfully Uploaded",
      results: data?.length,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
});

module.exports = app;
