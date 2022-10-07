const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')

module.exports = (req, res, next) => {
       if (!req.headers["x-access-token"]) {
              return res.status(402).send({
                     status: "error",
                     message: "x-access-token or authorization headers is required"
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
       jwt.verify(token, toString(secret), async (err, decodedToken) => {
              if (err) {
                     return res.status(402).send({
                            status: "error",
                            message: "Invalid access token"
                     })
              }
              req.user = decodedToken;
              //user will get new token when he's logged in, so i will check is sended token's is newest or not 
              // const userLastloginTime = (await db.getUserById(req.userId)).lastLoggedIn;
              // if (userLastloginTime > decodedToken.created) {
              //   return response.expiringTokenResponse(res);
              // }
              next();
       });
}