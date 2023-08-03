const sql = require("mssql/msnodesqlv8");

class MssqlModel {
  async insert(query) {
    const request = new sql.Request();

    await request
      .query(query)
      .then((result) => {
        console.log("Data inserted successfully: ", result.rowsAffected);
      })
      .catch((err) => {
        console.error("Error executing query:", err);
      });
  }
}

module.exports = new MssqlModel();
