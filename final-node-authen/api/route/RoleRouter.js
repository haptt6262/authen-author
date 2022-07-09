const RoleController = require('../controller/RoleController')

const RoleRoutes = (app) => {
    app.route('/role').post(RoleController.createRole).get(RoleController.getRole)
}
module.exports = RoleRoutes