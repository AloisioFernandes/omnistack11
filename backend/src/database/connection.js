const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development //node enviroment, variável ambiente node

const connection = knex(config);

module.exports = connection;
