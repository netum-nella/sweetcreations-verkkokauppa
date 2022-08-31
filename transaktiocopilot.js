//do a transaction function for lambda that uses async function 
const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });


async function transaction(id, id2, id3) {

    const client = await pool.connect();
    const insertProduct = "UPDATE product SET product_stock=product_stock-$1 WHERE product_id=$2"[id, id2];
    //const insertProductVal = [30, -3 , 10];
    const insertItem = "UPDATE cartitem SET cartitem_quantity=cartitem_quantity+$1 WHERE cartitem_id=$3"[id3];
    //const insertItemVal = [3, 3, 2]; 

    await client.query('BEGIN');
    try {
        await client.query(insertProduct); //insertProductVal
        await client.query(insertItem); //insertItemVal
        // await callback(client);
        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        await client.release();
    }
}

transaction()

//write a async lambda function for transaction. it substracts value {1} from product_stock and adds it to cartitem_quantity



