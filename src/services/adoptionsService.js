const AdoptionModel = require('../models/adoptionModel');
const PetModel = require('../models/petModel');

class AdoptionService {
    static async getAll() {
        return await AdoptionModel.getAll();
    }

    static async create(data) {
        const { pet_id } = data;
        const pet = await PetModel.findById(pet_id);
        if (!pet || pet.status !== 'available')
            throw new Error('Pet não disponível');
        await PetModel.updatePetStatus(pet_id, 'adopted');
        return await AdoptionModel.create(data);
    }
}

module.exports = AdoptionService;
