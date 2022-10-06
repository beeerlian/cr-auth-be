const axios = require('axios')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')
const endpoint = require('../constants/endpoint.constants')


exports.create = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.node}/order`, req.body);
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

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/order`, req.body);
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