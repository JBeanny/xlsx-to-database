const { knex } = require("../configs");

class MysqlModel {
  async insert(table, values) {
    try {
      await knex(table).insert(values);
      console.log("Data inserted successfully.");
    } catch (error) {
      console.error("Error executing query:", error);
    }
  }
}

module.exports = new MysqlModel();
