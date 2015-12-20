
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_tags', function(table){
    table.integer('post_id');
    table.integer('tags_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_tags');
};
