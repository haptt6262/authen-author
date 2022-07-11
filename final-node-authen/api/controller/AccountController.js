const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserModel = require('../model/UserModel')
const RoleModel = require('../model/RoleModel')

const privateKey = "thuhadaywertyuioghjhhjhhjjjj";


function generateToken(payload) {
    return jwt.sign(payload, privateKey, { expiresIn: '1h' })
}
exports.login = async (req, res) => {
    console.log(req, "doi haaaaaaaaaaaaaaaaaaaaaaaa");
    try {
        const { username, password } = req.body
        const existAcc = await UserModel.findOne({ username: username }).populate({
            path: "roles",
            select: "-__v"
        })
        if (!existAcc) {
            res.send({ message: "Account is not found!" })
            throw 'Account is not found!'
        } else {
            await existAcc.comparePassword(password, (error, isMatch) => {
                if (error) {
                    return res.json({ error: error.message })
                }
                if (!isMatch) {
                    return res.json({ "error": 'Incorrect password' })
                } else {
                    res.json({
                        token: generateToken({ username: existAcc.username, role: existAcc.roles.role }),
                        username: existAcc.username,
                        role: existAcc.roles.role
                    })
                }
            })
        }
    } catch (err) {
        res.json({ error: err.message })
    }
}

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body
        const existAcc = await UserModel.findOne({ username: username })
        if (existAcc) {
            res.send({ message: "Account already exists!" });
        } else {
            const hash = await bcrypt.hash(password, 10);
            const allUser = await UserModel.find()
            if (allUser.length === 0) {
                const allRole = await RoleModel.findOne({ role: 'admin' })
                await UserModel.create({ username: username, password: hash, roles: allRole._id })
            } else {
                const allRole = await RoleModel.findOne({ role: 'user' })
                await UserModel.create({ username: username, password: hash, roles: allRole._id })
            }
        }
        res.json({ status: "success" })
    } catch (error) {
        res.json({ error: error.message })
    }
}
