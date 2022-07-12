const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  debugger;
  res.json({ message: 'Welcome to the Support Center' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
