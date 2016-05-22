const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
  host: config.database.connection.host,
  dialect: config.database.connection.dialect,
  port: config.database.connection.port,
  pool: config.database.connection.pool
});

module.exports = sequelize;
