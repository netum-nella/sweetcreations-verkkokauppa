//Delete at the end of the day
const pg = require("pg");
const AWS = require("aws-sdk");

exports.createtablelambdaHandler = async (event, context) => {
  const db = pg.createConnection({
    host: "",
    port: 1234,
    user: "",
    password: "",
    database: "",
  });
  await db.connect();
  const statement =
    "CREATE TABLE customer (customer_id INT GENERATED ALWAYS AS IDENTITY, customer_name VARCHAR(255) NOT NULL, customer_city varchar(255), customer_phone integer, customer_email varchar(255) NOT NULL, PRIMARY KEY(customer_id));";
  await db.query(statement);
  await db.end();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Table created successfully",
    }),
  };
};
