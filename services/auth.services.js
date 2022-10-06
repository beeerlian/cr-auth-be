const axios = require('axios')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')
const endpoint = require('../constants/endpoint.constants')


exports.login = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.laravel}/signin`, req.body);
              const token = jwt.sign(response.data, secret);
              response.data.access_token = token;
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              res.status(error.response.status).send({
                     code: error.code,
                     data: error.response.data,
              })
       }
}

exports.register = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.laravel}/signup`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              res.status(error.response.status).send({
                     code: error.code,
                     data: error.response.data
              })
       }
}