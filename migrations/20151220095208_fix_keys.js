
exports.up = function(knex, Promise) {

  return knex.schema.createTableIfNotExists('posts', function(table){
    table.increments();
    table.integer('author_id');
    table.string('title');
    table.string('body');
    table.dateTime('date');
  }).then(function(){
    return knex.schema.createTableIfNotExists('authors', function(table){
      table.increments();
      table.string('firstname');
      table.string('lastname');
    })
  }).then(function(){
    return knex.schema.createTableIfNotExists('post_tags', function(table){
      table.integer('post_id');
      table.integer('tags_id');
    })
  }).then(function(){
    return knex.schema.createTableIfNotExists('tags', function(table){
      table.increments();
      table.string('name');
    })
  }).then(function(){
    return knex.schema.createTableIfNotExists('comments', function(table){
      table.integer('post_id');
      table.integer('author_id');
      table.string('body');
      table.dateTime('date');
    })
  }).then(function(){
    return knex.schema.raw("SET sql_mode='TRADITIONAL'")
      .table('posts', function (table) {
      table.column('author_id').references('id').inTable('authors');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts').then(function(){
    return knex.schema.dropTable('authors');
  }).then(function(){
    return knex.schema.dropTable('post_tags');
  }).then(function(){
    return knex.schema.dropTable('tags');
  }).then(function(){
    return knex.schema.dropTable('comments');
  });
};
