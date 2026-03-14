const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello it is realise by Toure Karamon from Node.js CI/CD Pipeline! Version 2.0 - Auto-deployed!');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
