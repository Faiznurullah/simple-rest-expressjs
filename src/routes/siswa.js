const express = require('express');
const router = express.Router();

const siswaController = require('../controller/siswa');

router.get('/', siswaController.getAllUsers);
router.get('/:id', siswaController.getUserById);
router.post('/', siswaController.createUser);
router.put('/', siswaController.updateUser);
router.delete('/:id', siswaController.deleteUser);

module.exports = router;