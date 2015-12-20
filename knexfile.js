module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gblog'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
