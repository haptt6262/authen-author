const RoleModel = require('../model/RoleModel')
exports.getRole = async (req, res) => {
    try {
        const listRoles = await RoleModel.find()
        res.json({ listRoles: listRoles })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.createRole = async (req, res) => {
    try {
        const role = req.body.role
        console.log("res: ", req.body);
        const a = await RoleModel.create({ role: role })
        res.json({ a })
    } catch (error) {
        res.send({ error: error.message })
    }
}