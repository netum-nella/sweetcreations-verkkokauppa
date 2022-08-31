const dotenv = require('dotenv').config();
const { Pool } = require('pg')
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });


async function oneProduct(id) {
    //const id = parseInt(event.pathParameters.id) // this id comes from API gateway, commented out for the test case
    const client = await pool.connect();
    const res = await client.query("SELECT * FROM product WHERE product_id = $1", [id]);
    console.log(res.rows);
    await client.release();
    return res.rows;


    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify(res.rows),
};



oneProduct(9);
module.exports = oneProduct;