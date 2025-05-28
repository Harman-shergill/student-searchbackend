const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/students', (req, res) => {
  const search = req.query.q?.toLowerCase();
  if (!search || search.length < 3) return res.json([]);

  try {
    // ✅ Must include encoding
    const data = fs.readFileSync('./student.json', 'utf-8');
    const students = JSON.parse(data);
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(search)
    );
    res.json(filtered.slice(0, 5));
  } catch (error) {
    console.error('❌ Error reading data:', error.message);
    res.status(500).send('Error reading data');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
