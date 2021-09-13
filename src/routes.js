const express = require('express');
const { restart } = require('nodemon');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'OK'});
})

module.exports = routes;