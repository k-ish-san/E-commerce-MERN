const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const router = express.Router();

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Registration logic
        res.send({ name, email, password })
    } catch (error) {
        console.error(error);
        res.status(500).send( "Server error" );
    }
});

module.exports = router;