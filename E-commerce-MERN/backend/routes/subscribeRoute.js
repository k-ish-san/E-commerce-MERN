const express = require('express'); 
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route  POST api/subscriber
// @desc   Subscribe a user
// @access Public
router.post('/', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ msg: 'Please provide an email address' });
    }

    try {
        // Check if the email already subscribed
        let subscriber = await Subscriber.findOne({ email });
        if (subscriber) {
            return res.status(400).json({ msg: 'Email already subscribed' });
        }

        // Create a new subscriber
        subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(201).json({ msg: 'Subscribed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});


module.exports = router;
