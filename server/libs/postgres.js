const {Client} = require('pg');

async function getConnection() {

  const client = new Client({
    host:'localhost',
    port: 5432,
    user: 'miguel',
    password:'admin123',
    database:'my_reserve'
  }) ;
  await client.connect();
  return client;
}



module.exports = getConnection;
