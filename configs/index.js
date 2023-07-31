require("dotenv").config({ path: ".env" });

module.exports = {
  PORT: process.env.PORT,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_SERVER: process.env.DATABASE_SERVER,
  DATABASE: process.env.DATABASE,
};
