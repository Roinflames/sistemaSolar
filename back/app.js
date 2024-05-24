const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const cors = require('cors');
app.use(cors());

// Habilita CORS para todas las solicitudes
app.use(cors());

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
      return res.status(200).json({});
  }
  next();
});



app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
