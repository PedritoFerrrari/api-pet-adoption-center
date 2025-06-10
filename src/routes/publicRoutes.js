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
router.post('/users', authenticateToken, AuthController.register);
router.post('/login', authenticateToken, AuthController.login);

module.exports = router;
