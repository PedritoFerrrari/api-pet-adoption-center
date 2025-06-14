const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

class UserService {
    static async registerUser(user) {
        const { email, password } = user;

        const existing = await UserModel.findByEmail(email);
        if (existing) {
            throw new Error('Usuário já existe');
        }

        const hashed = await bcrypt.hash(password, 10);
        user.password = hashed;

        const id = await UserModel.create(user);
        return { message: 'Usuário registrado com sucesso', id };
    }

    static async loginUser({ email, password }) {
        const user = await UserModel.findByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Senha inválida');
        }

        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { token };
    }

    static async getAllUsers() {
        return await UserModel.getAllUsers();
    }

    static async getUserById(id) {
        const user = await UserModel.findById(id);
        if (!user) throw new Error('Usuário não encontrado');
        return user;
    }

    static async updateUser(id, data) {
        const existingUser = await UserModel.findById(id);
        if (!existingUser) {
            throw new Error('Usuário não encontrado');
        }
        await UserModel.update(id, data);
    }

    static async deleteUser(id) {
        const user = await UserModel.findById(id);
        if (!user) throw new Error('Usuário não encontrado');
        await UserModel.delete(id);
    }
}

module.exports = UserService;
