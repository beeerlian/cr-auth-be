const order = require('./order.route')
const auth = require('./auth.route')

module.exports = function (app) {
       app.use(function (req, res, next) {
              res.header(
                     "Access-Control-Allow-Headers",
                     "x-access-token, Origin, Content-Type, Accept"
              );
              next();
       });

       order(app);
       auth(app);
}