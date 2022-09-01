//Lambda ok ja testit ok 30.8.
const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DB_CONNECTIONSTRING });

exports.oneCustomerShoppingcartHandler = async (event, context) => {
  const id = parseInt(event.pathParameters.id);
  const client = await pool.connect();
  const res = await client.query(
    "SELECT cartitem_quantity,product_name, product_price, product_scent, product_colour, customer_name, customer_email FROM product, customer, cart, cartitem WHERE cart.fk_customer_id = customer.customer_id AND customer.customer_id = $1 AND cartitem.fk_cart_id = cart.cart_id AND cartitem.fk_product_id = product.product_id",
    [id]
  );
  console.log(res.rows);
  await client.release();

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin":
        "http://sweety-bucket.s3-website.us-east-2.amazonaws.com", // replace with hostname of frontend (CloudFront)
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Acces-Control-Allow-Origin",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT",
    },
    body: JSON.stringify(res.rows),
  };

  return response;
};