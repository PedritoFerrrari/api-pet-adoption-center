const { validarData } = require('./validateDate');

function validateFields(data, expectedFields) {
    for (const expectedField of expectedFields) {
        if (!(expectedField in data)) {
            throw new Error(`O campo '${expectedField}' é obrigatório.`);
        }
    }

    for (const field of expectedFields) {
        let value = data[field];

        if (
            value === null ||
            value === undefined ||
            (typeof value === 'string' && value.trim() === '')
        ) {
            throw new Error(
                `O campo '${field}' é obrigatório e não pode ser vazio.`
            );
        }

        if (field === 'role') {
            if (value === '') {
                value = 'adopter';
            }

            if (!['adopter', 'admin'].includes(value)) {
                throw new Error(
                    `O campo 'role' só pode ter valores de admin ou adopter.`
                );
            }
        }

        if (field === 'size' && !['small', 'medium', 'large'].includes(value)) {
            throw new Error(
                `O campo 'size' só pode ter valores de small, medium ou 'large'`
            );
        }

        if (field === 'status' && !['available', 'adopted'].includes(value)) {
            throw new Error(
                `O campo 'status' só pode ter valores de available ou adopted`
            );
        }

        if (field === 'adoption_date' && !validarData(value)) {
            throw new Error(`Data inválida. Use o formato YYYY-MM-DD.`);
        }
    }
}

module.exports = { validateFields };
