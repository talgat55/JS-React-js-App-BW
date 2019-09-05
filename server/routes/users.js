import express from 'express';
import model from '../models/index';

const router = express.Router();

router.post('/', (req, res) => {
    const { user }= req.body;

    if (!user.email || !user.password) {
        res.status(400).send({
            status: false,
            message: ''
        });
    } else {
        model.users.create({
            email: user.email,
            password: user.password,
        }).then((user) => res.status(201).json({user: user.toAuthJSON()})).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
    }
});

export default router