// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'my_todos',
      user:     'postgres',
      password: 'postgres'
    },
   },

   production: {
    client: 'postgresql',
    connection: {
      database: 'my_todos',
      user:     'postgres',
      password: 'postgres'
    },

}
}
