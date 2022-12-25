const middleware = require('../middleware')
const services = require('../services')
const auth = services.auth;


module.exports = function (app) {
       app.get('/user', auth.getAllUser);
       app.get('/user/:id', [middleware.token.verify], auth.getUserById);
}
