import express from 'express';
import model from '../models/index';

const router = express.Router();

router.post('/', (req, res) => {
    const {credentials }= req.body;
    model.users.findOne({
        where: {
            email: credentials.email,
        }
    }).then(user => {
        if (user && user.isValidPassword(credentials.password)) {
            res.json({user: user.toAuthJSON()});
        } else {
            res.status(400).json({errors: {global: "Invalid credentials"}});
        }
    });
});
router.post('/get-password', (req, res) => {
    const credentials = req.body;

    model.users.findOne({
        where: {
            email: credentials.email,
        }
    }).then(user => {
        if (user && user.getPassword(credentials.password)) {
            res.json({pass: user.password});
        } else {
            res.status(400).json({errors: {global: "Invalid credentials"}});
        }
    });
});

export default router