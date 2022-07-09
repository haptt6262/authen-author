const UserModel = require('../model/UserModel')
const RoleModel = require('../model/RoleModel')

exports.getUser = async (req, res) => {
    try {
        const listUser = await UserModel.find().populate('roles')
        res.json({ listUser })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        console.log("id: ", id);
        const username = req.body.username
        await UserModel.findByIdAndUpdate(id, { username: username }, { new: true })
        res.json({ message: 'success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await UserModel.findByIdAndDelete(id)
        res.json({ message: 'success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.UserToAdmin = async (req, res) => {
    try {
        const id = req.params.id
        const adminRole = await RoleModel.findOne({ role: 'admin' })
        const user = await UserModel.findByIdAndUpdate(id, { roles: adminRole._id }, { new: true }).populate('roles', '-__v')
        res.json({ message: 'success' })
    } catch (error) {
        res.send({ error: error.message })
    }
}