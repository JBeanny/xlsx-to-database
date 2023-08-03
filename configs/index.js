require("dotenv").config({ path: ".env" });

const mssqlConfig = {
  server: "JBEANNY\\SQLEXPRESS",
  user: process.env.MSSQL_DATABASE_USER,
  password: process.env.MSSQL_DATABASE_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

// const knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: process.env.MYSQL_DATABASE_HOST,
//     user: process.env.MYSQL_DATABASE_USER,
//     password: process.env.MYSQL_DATABASE_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     port: 3306,
//     charset: "utf8mb4",
//   },
// });

module.exports = {
  PORT: process.env.PORT,
  // knex,
  mssqlConfig,
};
