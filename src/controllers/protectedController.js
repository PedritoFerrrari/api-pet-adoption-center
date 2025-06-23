const AdoptionService = require('../services/adoptionsService');
const petsService = require('../services/petsService');
const UserService = require('../services/userService');

const { validateFields } = require('../utils/validateFields');

class ProtectedController {
    static async getAllUsers(_, res) {
        try {
            const users = await UserService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            validateFields(req.body, ['name', 'email', 'password', 'phone']);
            const { name, email, password, phone } = req.body;
            await UserService.updateUser(id, { name, email, password, phone });
            return res
                .status(200)
                .json({ message: 'Usuário atualizado com sucesso' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await UserService.deleteUser(id);
            return res
                .status(200)
                .json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async getAllPets(req, res) {
        try {
            const pets = await petsService.getAllPets();
            return res.status(200).json(pets);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getPetById(req, res) {
        try {
            const { id } = req.params;
            const pet = await petsService.getPetById(id);
            return res.status(200).json(pet);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    static async createPet(req, res) {
        try {
            const id = await petsService.createPet(req.body);
            return res.status(201).json({ id });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async updatePet(req, res) {
        try {
            const { id } = req.params;
            const { name, age, species, size, status, description } = req.body;
            await petsService.updatePet(id, {
                name,
                age,
                species,
                size,
                status,
                description,
            });
            return res
                .status(200)
                .json({ message: 'Pet atualizado com sucesso' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async deletePet(req, res) {
        try {
            const { id } = req.params;
            await petsService.deletePet(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async getAllAdoptions(req, res) {
        try {
            const adoptions = await AdoptionService.getAll();
            return res.status(200).json(adoptions);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createAdoption(req, res) {
        try {
            const id = await AdoptionService.create(req.body);
            return res.status(201).json({ id });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ProtectedController;
