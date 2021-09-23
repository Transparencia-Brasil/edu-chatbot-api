const Sequelize = require('sequelize');
const config = require('../config/database');

console.log(config);

const Escola = require('../models/Escola');

const connection = new Sequelize(config);

Escola.init(connection);

module.exports = connection;