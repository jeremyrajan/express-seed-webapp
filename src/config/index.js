module.exports = {
  database: {
    name: 'example',
    username: process.env.username || 'root',
    password: process.env.password || 'root',
    connection: {
      host: 'localhost',
      dialect: 'mysql',
      port: 8889,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  }
};
