require('dotenv').config();
const pg = require('pg')

const client = new pg.Client({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
})


module.exports = client;