const middleware = require('../middleware')


module.exports = function (app) {
       app.get('/order', [middleware.verify], (req, res) => { })
       app.post('/order', [middleware.verify], (req, res) => { })
}
