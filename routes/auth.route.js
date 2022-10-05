const services = require('../services')
const auth = services.auth;


module.exports = function (app) {
       app.post('/login', auth.login);
       app.post('/register', auth.register);
}
