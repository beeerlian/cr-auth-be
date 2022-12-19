const middleware = require('../middleware');
const services = require('../services')
const transaction = services.transaction;


module.exports = function (app) {
       app.get('/transaction', [middleware.token.verify], transaction.getAll);
       app.post('/transaction', [middleware.token.verify], transaction.create);
       app.get('/transaction/:id', [middleware.token.verify], transaction.get);
}
