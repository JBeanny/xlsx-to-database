const Model = require("../models/mysql.model");
const excelDataConverter = require("../utils/excelConverter");

class MysqlController {
  async insert(req, res) {
    try {
      const data = excelDataConverter(req.file.buffer);
      const table = req.body.table_name;

      data.forEach(async (record) => {
        await Model.insert(table, record);
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
  }
}

module.exports = new MysqlController();
