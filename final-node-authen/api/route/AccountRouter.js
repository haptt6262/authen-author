const AccountController = require('../controller/AccountController')

const AccountRoutes = (app) => {
    app.route('/login').post(AccountController.login)
    app.route('/register').post(AccountController.register)
}
module.exports = AccountRoutes