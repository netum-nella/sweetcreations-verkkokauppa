const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

exports.listAllProductsHandler = async function customers() {
  const client = await pool.connect();
  const res = await client.query("SELECT * FROM product");
  console.log(res.rows);
  await client.release();

  const response = {
    statusCode: 200,
    body: JSON.stringify(res.rows),
  };

  return response;
};
