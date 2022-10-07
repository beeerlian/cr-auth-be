const middleware = {
       token: {},
       role: {}
};

middleware.token.verify = require('./verify.token.middleware');
middleware.role.verify = require('./verify.role.middleware')

module.exports = middleware;