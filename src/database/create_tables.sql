CREATE DATABASE pets_db;

USE pets_db;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        role ENUM ('admin', 'adopter') NOT NULL
    );

CREATE TABLE
    pets (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INT,
        species VARCHAR(100),
        size ENUM ('small', 'medium', 'large'),
        status ENUM ('available', 'adopted'),
        description TEXT
    );

CREATE TABLE
    adoptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        pet_id INT NOT NULL,
        adoption_date DATE,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (pet_id) REFERENCES pets (id)
    );