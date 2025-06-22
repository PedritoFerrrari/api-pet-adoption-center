const express = require('express');
const router = express.Router();

const ProtectedController = require('../controllers/protectedController');

const {
    authenticateToken,
    authorizeRole,
    authorizeByOwnerId,
} = require('../middlewares/authMiddleware');

//User routes
router.get(
    '/users',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.getAllUsers
);
router.get(
    '/users/:id',
    authenticateToken,
    authorizeRole(['admin', 'adopter']),
    authorizeByOwnerId(),
    ProtectedController.getUserById
);
router.put(
    '/users/:id',
    authenticateToken,
    authorizeRole(['admin', 'adopter']),
    authorizeByOwnerId(),
    ProtectedController.updateUser
);
router.delete(
    '/users/:id',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.deleteUser
);

//Pets routes
router.get(
    '/pets/:id',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.getPetById
);
router.post(
    '/pets/',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.createPet
);
router.put(
    '/pets/:id',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.updatePet
);
router.delete(
    '/pets/:id',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.deletePet
);

//Adoption routes
router.get(
    '/adoptions',
    authenticateToken,
    authorizeRole(['admin']),
    ProtectedController.getAllAdoptions
);
router.post(
    '/adoptions',
    authenticateToken,
    authorizeRole(['adopter']),
    ProtectedController.createAdoption
);

module.exports = router;
