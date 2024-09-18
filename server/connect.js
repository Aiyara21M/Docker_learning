require('dotenv').config(); 

// db.js
const { Pool } = require('pg');

// สร้างการเชื่อมต่อฐานข้อมูล
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// ฟังก์ชันเพื่อดึงข้อมูลจากตาราง DataUsers
const getDataUsers = async () => {
  try {
    const res = await pool.query('SELECT * FROM public."DataUsers"');
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

module.exports = { getDataUsers };


