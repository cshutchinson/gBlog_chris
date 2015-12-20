
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.integer('author_id');
    table.string('title');
    table.string('body');
    table.dateTime('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
