module.exports = (req, res, next) => {
       const role = req.user.role;
       switch (req.route.path) {
              case "/item":
                     if (role === 'CUSTOMER') sendErrorResponse(res, role);
                     break;
              case "/order":
                     if (role === 'CUSTOMER') sendErrorResponse(res, role);
                     break;
              case "/register":
                     if (role === "CUSTOMER") sendErrorResponse(res, role);
                     break;
              case "/transaction":
                     if (role === 'CUSTOMER') sendErrorResponse(res, role);
                     break;
              default:
                     break;
       }
       next();
}

function sendErrorResponse(res, role) {
       return res.status(402).send({
              status: "METHOD_NOT_ALOWWED",
              message: `youre cannot access this method with ${role} role`
       })
}