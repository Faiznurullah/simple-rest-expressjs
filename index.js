const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');

app.use(bodyParser.json());

app.get('/siswa/:id', (req, res) => {
  const parameter = req.params.id;
  const sql = `SELECT * FROM siswa where nim = ${parameter}`;
  db.query(sql, (error, result) => {
    response(200, result, 'detail data siswa', res)
  })
});

app.get('/siswa', (req, res) => {
  const sql = 'SELECT * FROM siswa limit 10';
  db.query(sql, (error, result) => {
    response(200, result, 'data siswa', res)
  })
});

app.post('/siswa', (req, res) => {

  const {name, nim, alamat} = req.body;
  const sql = `INSERT INTO siswa (name, nim, alamat) VALUES ('${name}', '${nim}', '${alamat}')`;
  db.query(sql, (error, result) => {
     
    if (error) {
      console.error('Kesalahan saat menyimpan data:', error);
       res.status(500).json({
         message: 'Internal Server Error'
       });

      return;
    }
    res.status(200).json({
      message: 'Insert data successfully',
      data: req.body
    });

  })
   
});

app.put('/siswa', (req, res) => {
  const {id, nim, name, alamat} = req.body;
  const sql = `UPDATE siswa SET name = '${name}', nim = ${nim}, alamat = '${alamat}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {

    if (error) {
      console.error('Kesalahan saat mengupdate data:', error);
       res.status(500).json({
         message: 'Internal Server Error',
         error: error
       });

      return;
    }

    res.status(200).json({
      message: 'Update data successfully',
      data: req.body
    });
    
  })
});

app.delete('/siswa', (req, res) => {
  const {id} = req.body;
  const sql = `DELETE FROM siswa WHERE id = ${id}`;
  db.query(sql, (error, result) => {

    if (error) {
      console.error('Kesalahan saat menghapus data:', error);
       res.status(500).json({
         message: 'Internal Server Error',
         error: error
       });

      return;
    }

    res.status(200).json({
      message: 'Hapus data successfully'
    });
    
  })
});










app.get('/find', (req, res) => {
  const sql = `SELECT * FROM siswa where nim = ${req.query.nim}`;
  db.query(sql, (error, result) => {
     console.log(result);
     response(200, result, 'detail siswa', res)
  }); 
});
 

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
