const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserModel = new mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Username require'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Password require'],
    },
    roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role'
    }
})

UserModel.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('user', UserModel)