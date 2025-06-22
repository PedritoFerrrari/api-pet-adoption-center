const db = require('../config/database');

class UserModel {
    static async findByEmail(email) {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
            email,
        ]);
        return rows[0];
    }

    static async create(user) {
        const { name, email, password, phone, role } = user;
        const [result] = await db.query(
            'INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
            [name, email, password, phone, role]
        );
        return result.insertId;
    }

    static async update(id, { name, email, password, phone }) {
        await db.query(
            `UPDATE users SET name = ?, email = ?, password = ?, phone = ? WHERE id = ?`,
            [name, email, password, phone, id]
        );
    }

    static async getAllUsers() {
        const [users] = await db.query('SELECT name, email, phone, role FROM users');
        return users;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT name, email, phone, role FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async delete(id) {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = UserModel;
