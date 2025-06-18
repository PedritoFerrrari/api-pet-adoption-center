const express = require('express');
const router = express.Router();

const PublicController = require('../controllers/publicController');
const AuthController = require('../controllers/authController');

const { authenticateToken } = require('../middlewares/authMiddleware');

router.get(
    '/pets/available',
    authenticateToken,
    PublicController.availablePets
);
router.post('/users', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;
