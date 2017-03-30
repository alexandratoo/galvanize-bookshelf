
exports.up = function(knex) {
  return knex.schema.createTable('favorites', (table) {
    table.increments
  } )

};

exports.down = function(knex) {

};
