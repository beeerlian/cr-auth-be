const order = require('./order.route')
const auth = require('./auth.route')
const item = require('./item.route')
const transaction = require('./transaction.route')


module.exports = function (app) {
       app.use(function (req, res, next) {
              res.header(
                     "Access-Control-Allow-Headers",
                     "x-access-token, Origin, Content-Type, Accept"
              );
              next();
       });

       item(app)
       order(app);
       auth(app);
       transaction(app);

}