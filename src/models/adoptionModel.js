const db = require('../config/database');

class AdoptionModel {
    static async create(adoption) {
        const { user_id, pet_id, adoption_date } = adoption;
        const [result] = await db.query(
            'INSERT INTO pets (name, age, species) VALUES (?, ?, ?)',
            [user_id, pet_id, adoption_date]
        );
        return result.insertId;
    }
}

module.exports = AdoptionModel;
