// No code was selected, and the provided code is not a code snippet but a README file. 
// However, I can provide a basic Express.js setup for a student search API.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = require('./students.json');

app.get('/search', (req, res) => {
  const query = req.query.query;
  const results = students.filter(student => 
    student.name.toLowerCase().includes(query.toLowerCase()) || 
    student.email.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
📁 Features

-  RESTful API built with Express.js  
- Loads student data from a local JSON file  
-  Search endpoint with case-insensitive, partial match  
-  Limits results to top 5 suggestions  
-  Fast and lightweight – ideal for learning/demo purposes  

---

Setup Instructions

 1. Clone the Repository

bash
git clone https://github.com/Harman-shergill/student-searchbar.git
cd student-searchbar/backend
