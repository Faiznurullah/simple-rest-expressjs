const express = require('express');
const app = express();
const port = 3000;
const siswaRoutes = require('./src/routes/siswa'); 
const bodyParser = require('body-parser');

// Ubah path sesuai kebutuhan
app.use(bodyParser.json());
app.use('/siswa', siswaRoutes); 

 
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
