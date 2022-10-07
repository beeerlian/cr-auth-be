const axios = require('axios')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')
const endpoint = require('../constants/endpoint.constants')


exports.login = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.laravel}/login`, req.body);
              console.log(response.data.data)
              const token = jwt.sign(response.data.data, toString(secret));
              response.data.data.access_token = token;
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error.response.data.message || error.response.data || error.message || error
              })
       }
}

exports.register = async (req, res) => {

       try {
              if ((req.user.role === "ADMIN" && req.body.role !== "CUSTOMER")) {
                     throw `youre cannot access this method with ${req.user.role} role`;
              }
              if (req.body.role !== "CUSTOMER" && req.body.role !== "SUPER_ADMIN" && req.body.role !== "ADMIN") {
                     throw `available role only "CUSTOMER", "SUPER_ADMIN", "ADMIN"`;
              }
              const response = await axios.post(`${endpoint.laravel}/user`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              res.status(error.status || 404).send({
                     code: error.code || "BAD_REQUEST",
                     error: error.response.data.message || error.response.data || error.message || error
              })
       }
}