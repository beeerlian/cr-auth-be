const services = {};

services.auth = require('./auth.services');
services.order = require('./order.services');
services.transaction = require('./transaction.services');
services.item = require('./item.services')

module.exports = services;