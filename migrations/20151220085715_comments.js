
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.integer('post_id');
    table.integer('author_id');
    table.string('body');
    table.dateTime('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
