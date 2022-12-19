
const axios = require('axios')
const endpoint = require('../constants/endpoint.constants')

exports.create = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.laravel}/item`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.update = async (req, res) => {
       try {
              const response = await axios.put(`${endpoint.laravel}/item/${req.params.id}`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.delete = async (req, res) => {
       try {
              const response = await axios.delete(`${endpoint.laravel}/item/${req.params.id}`);
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.laravel}/item/${req.params.id}`);
              if (response.success) {
                     throw new Error("not found")
              }
              res.status(200).send({
                     status: "success",
                     data: response.data.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.getAll = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.laravel}/item`);
              res.status(200).send({
                     status: "success",
                     data: response?.data?.data ?? []
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

function sendErrorRes(res, error) {
       res.status(error.status || 400).send({
              code: error.code || "BAD_REQUEST",
              error: error.response?.data?.message ?? error.response?.data ?? error?.message ?? error
       })
}