const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

async function oneCustomerOneOrder(id) {

    const client = await pool.connect();
    const res = await client.query(
        "SELECT ordertable_id,cartitem_quantity,product_name, product_price, product_scent, product_colour, customer_name, customer_email FROM product, customer, cart, cartitem, ordertable WHERE cart.fk_customer_id = customer.customer_id AND customer.customer_id = $1 AND cartitem.fk_cart_id = cart.cart_id AND cartitem.fk_product_id = product.product_id AND cartitem.fk_cart_id = ordertable.ordertable_id",
        [id]
    );
    console.log(res.rows); // commented out for the tests
    await client.release();
    return res.rows;


};


oneCustomerOneOrder(1)

module.exports = oneCustomerOneOrder;