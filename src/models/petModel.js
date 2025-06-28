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

    static async getAvailablePets() {
        const [rows] = await db.query(
            "SELECT * FROM pets WHERE status = 'available';"
        );
        return rows;
    }

    static async getAllPets() {
        const [pets] = await db.query('SELECT * FROM pets');
        return pets;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM pets WHERE id = ?', [id]);
        return rows[0];
    }

    static async update(id, { name, age, species, size, status, description }) {
        await db.query(
            `UPDATE pets SET name = ?, age = ?, species = ?, size = ?, status = ?, description = ? WHERE id = ?`,
            [name, age, species, size, status, description, id]
        );
    }

    static async updatePetStatus(id, status) {
        await db.query(`UPDATE pets SET status = ? WHERE id = ?`, [status, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM pets WHERE id = ?', [id]);
    }
}

module.exports = PetModel;
