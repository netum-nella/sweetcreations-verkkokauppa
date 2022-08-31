const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

(async () => {
    const client = await pool.connect();
    const insertProduct = `UPDATE product SET product_stock=product_stock-1 WHERE product_id=1;`;
    //const insertProductVal = [30, -3 , 10];
    const insertItem = `UPDATE cartitem SET cartitem_quantity=cartitem_quantity+1 WHERE cartitem_id=1;`;
    //const insertItemVal = [3, 3, 2]; 
    try {
        await client.query("BEGIN");
        await client.query(insertProduct); //insertProductVal
        await client.query(insertItem); //insertItemVal
        await client.query("COMMIT");
    } catch (e) {
        await client.query("ROLLBACK");
        throw e;
    } finally {
        client.release();

    }

})().catch((e) => console.error(e));