const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

exports.getAllCustomersHandler = async function customers() {
  const client = await pool.connect();
  const res = await client.query("SELECT * FROM customer;");
  console.log(res.rows);
  await client.release();
  return res.rows;
};

const response = {
  statusCode: 200,
  body: JSON.stringify("Hello from Lambda!"),
};
return response;
