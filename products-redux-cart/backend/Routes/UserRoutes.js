const express = require('express');
const UserControllers = require('../Controllers/UserControllers');

const router = express.Router();

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);

module.exports = {UsersRoute : router};