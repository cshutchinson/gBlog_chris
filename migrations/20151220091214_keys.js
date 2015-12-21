
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table){
    table.hasColumn('id').primary();
    table.hasColumn('author_id').references('id').inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
