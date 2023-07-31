const mysql = require("mysql");
const config = require("./index");

const connection = mysql.createConnection({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE,
});

const connectToDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database!");
  });
};

const insertToDatabase = (newRecord, tableName) => {
  const cols = Object.keys(newRecord).join(",");
  const values = Object.values(newRecord);
  const valuesFormat = values.map(() => "?");
  const query = `INSERT INTO ${tableName} (${cols}) VALUES (${valuesFormat})`;

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("Data inserted successfully.");
  });
};

module.exports = { connectToDatabase, insertToDatabase };
