const db = require('../config/database');

class PetModel {

    static async create(pet) {
        const { name, age, species, size, status, description } = pet;
        const [result] = await db.query(
            'INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)',
            [name, age, species, size, status, description]
        );
        return result.insertId;
    }

}

module.exports = PetModel;