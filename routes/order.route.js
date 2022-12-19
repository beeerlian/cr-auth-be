const middleware = require('../middleware')
const services = require('../services')
const order = services.order;

module.exports = function (app) {
       app.get('/order', [middleware.token.verify], order.getAll)
       app.post('/order', [middleware.token.verify], order.create)
       app.get('/order/:id', [middleware.token.verify], order.get)
       app.get('/order/:id/price', [middleware.token.verify], order.calculatePrice)
       app.delete('/order/:id', [middleware.token.verify], order.delete)
       app.put('/order/:id', [middleware.token.verify], order.update)
}
