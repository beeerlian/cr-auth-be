const axios = require('axios')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')

exports.login = async (req, res) => {
       try {
              const response = await axios.post('url', req.body);
              const token = jwt.sign(response.data, secret);
              res.status(200).send({
                     status: "success",
                     access_token: token
              })
       } catch (error) {
              res.status(200).send({
                     status: "error",
                     message: "login failed",
                     error: error
              })
       }
}

exports.register = async (req, res) => {
       try {
              const response = await axios.post('url', req.body);
              res.status(200).send({
                     status: "success",
                     response: response
              })
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              res.status(200).send({
                     status: "error",
                     message: "register failed",
                     req_body: req.body,
                     error: error
              })
       }
}