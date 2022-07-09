const UserController = require('../controller/UserController')
const AccountMiddleware = require('../middleware/AccountMiddleware')

const UserRoutes = (app) => {
    app.route('/user').get(UserController.getUser)
    app.route('/user/:id').put(AccountMiddleware.verifyToken, AccountMiddleware.isAdmin, UserController.updateUser)
        .delete(AccountMiddleware.verifyToken, AccountMiddleware.isAdmin, UserController.deleteUser)
    app.route('/update-admin/:id').put(AccountMiddleware.verifyToken, AccountMiddleware.isAdmin, UserController.UserToAdmin)
}
module.exports = UserRoutes