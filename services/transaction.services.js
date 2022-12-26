const axios = require('axios')
const endpoint = require('../constants/endpoint.constants')


exports.create = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.node}/transaction`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error.response.data.message || error.response.data || error.message || error
              })
       }
}

exports.getAll = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/transaction`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error.response.data.message || error.response.data || error.message || error
              })
       }
}

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/transaction/${req.params.id}`);
              const user = await axios.get(`${endpoint.laravel}/user/${response.data.teller_id}`);
              console.log(user)
              response.data.teller = user?.data?.data
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error.response.data.message || error.response.data || error.message || error
              })
       }
}