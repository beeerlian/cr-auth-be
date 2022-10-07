const middleware = require('../middleware')
const services = require('../services')
const auth = services.auth;


module.exports = function (app) {
       app.post('/login', auth.login);
       app.post('/register', [middleware.token.verify, middleware.role.verify], auth.register);
}
