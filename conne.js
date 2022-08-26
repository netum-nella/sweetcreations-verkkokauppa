// Haetaan kirjautumistiedot tietokantayhteyttä varten
let secretManager = new AWS.SecretsManager({ region: "us-east-2" });
const data = await secretManager
  .getSecretValue({ SecretId: "kinkkusalaisuus" })
  .promise();
let secret = JSON.parse(data.SecretString);

// Määritellään tietokantayhteys
const pool = new Pool({
  user: secret.username,
  host: secret.host,
  database: secret.dbname,
  password: secret.password,
  port: 5432,
});
