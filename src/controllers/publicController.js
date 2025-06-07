class PublicController {

    static async availablePets(req, res) {
        try {
            return res.status(201).json('pets');
        } catch (error) {
            return res.status(409).json({ message: error.message });
        }
    }

}

module.exports = PublicController;