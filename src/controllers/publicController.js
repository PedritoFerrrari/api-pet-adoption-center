const petsService = require('../services/petsService');

class PublicController {
    static async availablePets(req, res) {
        try {
            const result = await petsService.getAvailablePets();
            return res.status(201).json(result);
        } catch (error) {
            return res.status(409).json({ message: error.message });
        }
    }
}

module.exports = PublicController;
