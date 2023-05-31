const router = require('express').Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            username: 'janedoe',
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }

});
router.get('/', async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }

});



module.exports = router;

