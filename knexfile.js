
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize-bookshelf'},

  test: {
    client: 'pg',
    connection: 'postgres://localhost/bookshelf_test'},

  production: { "client": "pg",
    "connection": process.env.DATABASE_URL}
};
