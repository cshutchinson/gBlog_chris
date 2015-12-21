var Express = require('express');
var app = Express();

var bodyParser = require('body-parser');


var knex = require('./db/knex');
function Posts() {
  return knex('posts');
}

var favicon = require('serve-favicon');
app.use(favicon('favicon.ico'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.redirect('/posts');
})

// --- READ --- //
app.get('/posts', function(req, res){
  var posts = Posts().select().then(function(result){
    res.json(result);
  })
})

app.get('/posts/:id', function(req,res){
  var posts = Posts().select().where({id: req.params.id})
  .then(function(result){
    res.json(result);
  });
})

// --- CREATE --- //
app.post('/posts/new', function(req, res){
  knex('posts').insert({author_id: req.body.author_id, title: req.body.title,
    body: req.body.body, date: req.body.date}).returning('id').then(function(result){
      res.json(result);
    });
});

// --- UPDATE --- //


// --- DELETE --- //



app.listen(8080, function(){
  console.log('API server listening on port 8080:');
});
