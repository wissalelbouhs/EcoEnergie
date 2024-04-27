const express = require('express');
const router = express.Router();
const UserDAO = require('../models/User/UserDao.js');
router.post('/users', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const newUser = new User(null, firstname, lastname, email, password); 
    try {
        const userId = await UserDAO.createUser(newUser);
        res.status(201).json({ id: userId });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { firstname, lastname, email, password } = req.body;
    const updatedUser = new User(userId, firstname, lastname, email, password);
    try {
        const success = await UserDAO.updateUser(updatedUser);
        if (success) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const success = await UserDAO.deleteUser(userId);
        if (success) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});