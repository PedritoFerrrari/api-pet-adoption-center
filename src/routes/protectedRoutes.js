const express = require('express');
const router = express.Router();

const ProtectedController = require('../controllers/protectedController');

//User routes
router.get('/user', ProtectedController.getUsers);
router.get('/users/:id ', ProtectedController.getUserById);
router.post('/users/ ', ProtectedController.createUser);
router.put('/users/:id ', ProtectedController.updateUser);
router.delete('/users/:id ', ProtectedController.deleteUser);

//Pets routes 
router.get('/pets', ProtectedController.getPets);
router.get('/pets/:id ', ProtectedController.getPetById);
router.post('/pets/ ', ProtectedController.createPet);
router.put('/pets/:id ', ProtectedController.updatePet);
router.delete('/pets/:id ', ProtectedController.deleteUser);

//Adoption routes
router.get('/adoptions', ProtectedController.getAdoptions);
router.post('/adoptions', ProtectedController.createAdoption);

module.exports = router;

