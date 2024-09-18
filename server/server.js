// server.js
const express = require('express');
const cors = require('cors');
const { getDataUsers } = require('./connect');

const app = express();
const port = 3007;

// ใช้ cors middleware
app.use(cors({ origin: 'http://frontend:5711' }));

// Middleware
app.use(express.json());

// Route เพื่อดึงข้อมูลจากตาราง DataUsers
app.get('/data-users', async (req, res) => {
  try {
    const dataUsers = await getDataUsers();
    res.json(dataUsers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
