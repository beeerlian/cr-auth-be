const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
       if (!req.headers["x-access-token"] || !req.headers["authorization"]) {
              return res.status(402).send({
                     status: "error",
                     message: "Access token is required"
              })
       }
       let token = req.headers["x-access-token"] || req.headers["authorization"].split(' ')[1];
       if (!token) {
              return res.status(402).send({
                     status: "error",
                     message: "Access token is required"
              })
       }
       //verify sended tokens
       jwt.verify(token, config.secret, async (err, decodedToken) => {
              if (err) {
                     return res.status(402).send({
                            status: "error",
                            message: "Access token is required"
                     })
              }
              req.userId = decodedToken.id;
              //user will get new token when he's logged in, so i will check is sended token's is newest or not 
              // const userLastloginTime = (await db.getUserById(req.userId)).lastLoggedIn;
              // if (userLastloginTime > decodedToken.created) {
              //   return response.expiringTokenResponse(res);
              // }
              next();
       });
}