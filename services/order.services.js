const axios = require('axios')
const jwt = require('jsonwebtoken')
const secret = require('../configs/secret.config')
const endpoint = require('../constants/endpoint.constants')


// exports.create = async (req, res) => {
//        try {
//               const response = await axios.post(`${endpoint.node}/order`, req.body);
//               res.status(200).send({
//                      status: "success",
//                      data: response.data
//               })
//        } catch (error) {
//               res.status(error.response.status).send({
//                      code: error.code,
//                      data: error.response.data,
//               })
//        }
// }

// exports.get = async (req, res) => {
//        try {
//               const response = await axios.get(`${endpoint.node}/order`, req.body);
//               res.status(200).send({
//                      status: "success",
//                      data: response.data
//               })
//        } catch (error) {
//               res.status(error.response.status).send({
//                      code: error.code,
//                      data: error.response.data,
//               })
//        }
// }


exports.create = async (req, res) => {
       try {
              const result = await axios.get(`${endpoint.laravel}/item/${req.body.item_id}`);
              if (!result) {
                     throw new Error("Item not found");
              }
              const item = result.data.data;
              req.body = {
                     ...req.body,
                     item_name: item.name,
                     item_price: item.price,
              }
              const response = await axios.post(`${endpoint.node}/order`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.update = async (req, res) => {
       try {
              const response = await axios.put(`${endpoint.node}/order/${req.params.id}`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.calculatePrice = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/order/${req.params.id}/price`);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}


exports.delete = async (req, res) => {
       try {
              const response = await axios.delete(`${endpoint.node}/order/${req.params.id}`);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/order/${req.params.id}`);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.getAll = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/order`);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

function sendErrorRes(res, error) {
       res.status(error.status || 400).send({
              code: error.code || "BAD_REQUEST",
              error: error.response.data.message || error.response.data || error.message || error
       })
}