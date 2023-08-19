const db = require('../config/connection');
const response = require('../response'); 


const Siswa = {};

Siswa.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM siswa';
    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Error fetching users', error: error.message });
        }
        response(200, results, 'data siswa', res);
    });
};


Siswa.getUserById = (req, res) => {
    const parameter = req.params.id;
    const sql = `SELECT * FROM siswa where nim = ${parameter}`;
    db.query(sql, (error, result) => {
        response(200, result, 'detail data siswa', res)
    })
};


Siswa.createUser = (req, res) => {
    
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
        
    });
    
};


Siswa.updateUser = (req, res) => {
    
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
    
};

Siswa.deleteUser = (id, callback) => {
    const sql = `DELETE FROM siswa WHERE id = ${id}`;
    db.query(sql, (error, result) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};


module.exports = Siswa;
