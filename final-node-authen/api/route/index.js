
module.exports = function (app) {
    const AccountRoutes = require('./AccountRouter')
    const RoleRoutes = require('./RoleRouter')
    const UserRoutes = require('./UserRouter')
    AccountRoutes(app)
    RoleRoutes(app)
    UserRoutes(app)
}