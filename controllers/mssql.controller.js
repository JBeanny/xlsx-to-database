const excelDataConverter = require("../utils/excelConverter");
const Model = require("../models/mssql.model");

class MssqlController {
  insert(req, res) {
    try {
      const data = excelDataConverter(req.file.buffer);
      const table = req.body.table_name;

      data.forEach(async (record) => {
        const cols = Object.keys(record).join(",");
        const values = Object.values(record)
          .map((val) => `'${val}'`)
          .join(",");
        const query = `INSERT INTO ${table} (${cols}) VALUES (${values})`;
        await Model.insert(query);
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

module.exports = new MssqlController();
