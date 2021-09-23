const Sequelize = require('sequelize');
const config = require('../config/database');

const Uf = require('../models/Uf');
const Municipio = require('../models/Municipio');
const Escola = require('../models/Escola');

const connection = new Sequelize(config);

Uf.init(connection);
Municipio.init(connection);
Escola.init(connection);

Uf.associate(connection.models);
Municipio.associate(connection.models);

module.exports = connection;