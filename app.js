const express = require("express");
const app = express();
const { connectToMsSqlDatabase } = require("./configs/db");

connectToMsSqlDatabase();

const MSSQL_ROUTE = require("./routes/mssql.routes");
const MYSQL_ROUTE = require("./routes/mysql.routes");

app.use("/api/v1/mssql/xlsx", MSSQL_ROUTE);
app.use("/api/v1/mysql/xlsx", MYSQL_ROUTE);

module.exports = app;
