const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 30
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;