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
    ProtectedController.getAllUsers
);
router.get(
    '/users/:id',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.getUserById
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
    ProtectedController.getAllAdoptions
);
router.post(
    '/adoptions',
    authenticateToken,
    authorizeRole('admin'),
    ProtectedController.createAdoption
);

module.exports = router;
