// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');
require('dotenv').config();

// Benutzer registrieren
const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Alle Felder sind erforderlich!' });
    }

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Benutzer existiert bereits!' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await createUser(username, email, passwordHash);

        res.status(201).json({ message: 'Benutzer erfolgreich erstellt!', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Fehler bei der Registrierung', error: err.message });
    }
};

// Benutzer einloggen
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'E-Mail und Passwort sind erforderlich!' });
    }

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Benutzer nicht gefunden!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Ungültiges Passwort!' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login erfolgreich!', token });
    } catch (err) {
        res.status(500).json({ message: 'Fehler beim Login', error: err.message });
    }
};

module.exports = { register, login };
