const env = require("./env");

// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: env.username,
        database: env.db,
        password: env.password
    },
    migrations: {
      directory: './migrations',
  }
},
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: env.username,
      database: 'test-cjs-web-store',
      password: env.password
  },
    migrations: {
        directory: './migrations',
      }
  }
}