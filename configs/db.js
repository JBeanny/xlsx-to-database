const sql = require("mssql/msnodesqlv8");
const { mssqlConfig } = require("./index");

const connectToMsSqlDatabase = () => {
  sql
    .connect(mssqlConfig)
    .then((pool) => {
      console.log("Connected to the database using Windows Authentication!");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });
};

module.exports = {
  connectToMsSqlDatabase,
};
