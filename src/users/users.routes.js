const express = require('express');
const UserController = require('./users.controller');
const router = express.Router();

router.post('/usuarios', UserController.create);

router.get('/usuarios', UserController.findAll);

router.get('/usuarios/:id', UserController.findById);

router.put('/usuarios/:id', UserController.update);

router.delete('/usuarios/:id', UserController.remove);

module.exports = router;