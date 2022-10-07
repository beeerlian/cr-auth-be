const middleware = require('../middleware')


module.exports = function (app) {
       app.get('/order', [middleware.token.verify], (req, res) => {

       })
       app.post('/order', [middleware.token.verify], (req, res) => { })
}
