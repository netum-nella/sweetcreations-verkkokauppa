const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

async function products() {
    const client = await pool.connect();
    const res = await client.query("SELECT * FROM product;");

    console.log(res.rows);

    await client.release();
    return res.rows;


};
products();
module.exports = products;
