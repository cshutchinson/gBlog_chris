var Express = require('express');
var app = Express();

var knex = require('./db/knex');
function Posts() {
  return knex('posts');
}

var favicon = require('serve-favicon');
app.use(favicon('favicon.ico'));

app.get('/', function(req, res){
  res.redirect('/posts');
})

app.get('/posts', function(req, res){
  var posts = Posts().select().then(function(result){
    res.json(result);
  })
})

app.listen(8080, function(){
  console.log('API server listening on port 8080:');
});
