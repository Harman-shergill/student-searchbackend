const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/students', (req, res) => {
  const search = req.query.q?.toLowerCase();
  if (!search || search.length < 3) return res.json([]);

  try {
    const data = fs.readFileSync('./student.json', 'utf-8');
    const students = JSON.parse(data);
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(search)
    );
    res.json(filtered.slice(0, 5));
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Export handler for Vercel
module.exports = app;
