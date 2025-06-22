INSERT INTO
    users (name, email, password, phone, role)
VALUES
    (
        'Ana Silva',
        'ana.silva@example.com',
        '$2b$10$XZRoar9El4n9rSC6XPIrP.6.Z50he.GEPRQtDMIbSBdjBx8TcWaFS',
        '11988887777',
        'adopter'
    ), -- senha: senha123
    (
        'Carlos Souza',
        'carlos.souza@example.com',
        'adminpass',
        '$2b$10$W9XMPF2X9TY0KoUGEV0oTO6pmMTOjgxE3u48DvnOn4qt5eARJLOMi',
        'admin'
    );

--Senha: adminpass
INSERT INTO
    pets (name, age, species, size, status, description)
VALUES
    (
        'Bolt',
        3,
        'Dog',
        'medium',
        'available',
        'Energetic and playful. Loves to run.'
    ),
    (
        'Mimi',
        2,
        'Cat',
        'small',
        'adopted',
        'Affectionate and loves cuddles.'
    ),
    (
        'Rex',
        5,
        'Dog',
        'large',
        'available',
        'Guard dog, very loyal and strong.'
    );

INSERT INTO
    adoptions (user_id, pet_id, adoption_date)
VALUES
    (1, 2, '2025-06-01'),
    (1, 1, '2025-06-15');