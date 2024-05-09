const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express.js!');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
