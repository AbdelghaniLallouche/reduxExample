const mongoose = require('mongoose');
const User = require('../models/user');
const generateAuthToken = require('../helpers');
const bcrypt = require('bcrypt');
const Joi = require('joi')

const register = async (req, res) => {
    const schema = Joi.object({
        name : Joi.string().min(3).max(30).required(),
        email : Joi.string().min(3).max(255).required().email(),
        password : Joi.string().min(3).max(30).required(),
    });
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send({error : error.details[0].message , mahboul : "mahboul"});

    let user = await User.findOne({email: req.body.email});

    if(user) return res.status(400).send({error : 'User already exists'}); 

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();

    const token = generateAuthToken(user);
    res.send({token : token});

}



const login = async (req, res) => {
 const schema = Joi.object({
        email : Joi.string().min(3).max(255).required().email(),
        password : Joi.string().min(3).max(30).required(),
    });
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send({error : error.details[0].message});

    let user = await User.findOne({email: req.body.email});

    if(!user) return res.status(400).send({error : 'Invalid email'});

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword) return res.status(400).send({ error : 'Invalid password'});

    const token = generateAuthToken(user);
    
    res.send({token : token});
}


module.exports = {
    register,
    login
} 