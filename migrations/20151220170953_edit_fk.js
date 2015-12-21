
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', function(table){
    table.increments();
    table.string('firstname');
    table.string('lastname');
  }).then(function(){
    return knex.schema.createTableIfNotExists('tags', function(table){
      table.increments();
      table.string('name');
    }).then(function(){
      return knex.schema.createTableIfNotExists('posts', function(table){
        table.increments().unique().primary();
        table.integer('author_id').references('id').inTable('authors');
        table.string('title');
        table.string('body');
        table.dateTime('date');
      })
    }).then(function(){
      return knex.schema.createTableIfNotExists('comments', function(table){
        table.integer('post_id').unique().primary();
        table.integer('author_id').references('id').inTable('authors');
        table.string('body');
        table.dateTime('date');
      })
    })
  }).then(function(){
    return knex.schema.createTableIfNotExists('post_tags', function(table){
      table.integer('post_id').references('id').inTable('posts');
      table.integer('tags_id').references('id').inTable('tags');
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
