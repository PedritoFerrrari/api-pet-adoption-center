const express = require('express');
const router = express.Router();

const ProtectedController = require('../controllers/protectedController');

const {
    authenticateToken,
    authorizeRole,
} = require('../middlewares/authMiddleware');

//User routes
router.get(
    '/user',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getUsers
);
router.get(
    '/users/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getUserById
);
router.post(
    '/users/',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.createUser
);
router.put(
    '/users/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.updateUser
);
router.delete(
    '/users/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.deleteUser
);

//Pets routes
router.get(
    '/pets',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getPets
);
router.get(
    '/pets/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getPetById
);
router.post(
    '/pets/',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.createPet
);
router.put(
    '/pets/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.updatePet
);
router.delete(
    '/pets/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.deleteUser
);

//Adoption routes
router.get(
    '/adoptions',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getAdoptions
);
router.post(
    '/adoptions',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.createAdoption
);

module.exports = router;
