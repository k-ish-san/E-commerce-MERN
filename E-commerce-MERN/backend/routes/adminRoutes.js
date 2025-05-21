const express = require('express');
const User = require('../models/User');
const { protect, admin } = require('../middleware/authMiddleware');   

const router = express.Router();


// @route   GET /api/admin/users
// @desc    Get all users
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST/api/admin/users
// @desc    Add a new user
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({
            name,
            email,
            password,
            role: role || 'customer', // Default role is 'customer'
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   PUT /api/admin/users/:id
// @desc    Update a user information
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
    const { name, email, password, role } = req.body;

});
module.exports = router;
