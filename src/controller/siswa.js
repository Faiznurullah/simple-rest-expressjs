const Siswa = require('../model/siswa'); 


exports.getAllUsers = (req, res) => {
    Siswa.getAllUsers(req, res);
  };

  exports.getUserById = (req, res) => {
    Siswa.getUserById(req, res);
  };

  exports.createUser = (req, res) => {
    Siswa.createUser(req, res);
  };

  exports.updateUser = (req, res) => {
    Siswa.updateUser(req, res);
  };


  exports.deleteUser = (req, res) => {
    const id = req.params.id;
    Siswa.deleteUser(id, (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Error deleting user', error: error.message });
        }
        res.status(200).json({ message: 'Delete data successfully' });
    });
};