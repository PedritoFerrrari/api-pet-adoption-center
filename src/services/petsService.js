const PetModel = require('../models/petModel');

class petsService {
    static async getAvailablePets() {
        const pets = await PetModel.getAvailablePets();
        if (pets.length <= 0) {
            throw new Error('Não existem pets disponíveis');
        }
        return pets;
    }
}

module.exports = petsService;
