const PetModel = require('../models/petModel');

class petsService {

    static async getAvailablePets() {
        const pets = await PetModel.getAvailablePets();
        if (pets.length <= 0) {
            throw new Error('Não existem pets disponíveis');
        }
        return pets;
    }

    static async getAllPets() {
        return await PetModel.getAllPets();
    }

    static async getPetById(id) {
        const pet = await PetModel.findById(id);
        if (!pet) throw new Error('Pet não encontrado');
        return pet;
    }

    static async createPet(data) {
        return await PetModel.create(data);
    }

    static async updatePet(id, data) {
        const existingPet = await PetModel.findById(id);
        if (!existingPet) {
            throw new Error('Pet não encontrado');
        }
        await PetModel.update(id, data);
    }

    static async deletePet(id) {
        const pet = await PetModel.findById(id);
        if (!pet || pet.status !== 'available') {
            throw new Error('Somente pets disponíveis podem ser removidos');
        }
        await PetModel.delete(id);
    }
}

module.exports = petsService;
