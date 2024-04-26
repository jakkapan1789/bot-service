const { Client } = require("pg");
const { Sequelize } = require("sequelize");

const pgClient = new Client({
  user: "your_username",
  host: "localhost",
  database: "your_database_name",
  password: "your_password",
  port: 5432,
});

// Sequelize configuration
const sequelize = new Sequelize(
  "your_database_name",
  "your_username",
  "your_password",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

// Connect to PostgreSQL client
async function connectPGClient() {
  try {
    await pgClient.connect();
    console.log("Connected to PostgreSQL database");
  } catch (err) {
    console.error("Error connecting to PostgreSQL database:", err);
  }
}

// Test the database connection
async function testSequelizeConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to Sequelize has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the Sequelize database:", error);
  }
}

// Call connection functions
// connectPGClient();
// testSequelizeConnection();

module.exports = { pgClient, sequelize };
