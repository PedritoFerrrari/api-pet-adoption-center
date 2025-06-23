const AdoptionModel = require('../models/adoptionModel');
const PetModel = require('../models/petModel');

class AdoptionService {
    static async getAll() {
        return await AdoptionModel.getAll();
    }

    static async create(data) {
        const { petId } = data;
        const pet = await PetModel.findById(petId);
        if (!pet || pet.status !== 'available')
            throw new Error('Pet não disponível');
        await PetModel.update(petId, { status: 'adopted' });
        return await AdoptionModel.create(data);
    }
}

module.exports = AdoptionService;
