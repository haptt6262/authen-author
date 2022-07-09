const mongoose = require('mongoose')
const RoleModel = new mongoose.Schema({
    role: {
        type: String,
    },
    id_User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})
module.exports = mongoose.model('role', RoleModel)