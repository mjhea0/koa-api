(function() {

  'use strict';

  const app = require('koa')();
  const logger = require('koa-logger');
  const json = require('koa-json');
  const route = require('koa-route');

  const movies = require('./controllers/movies');

  app.use(function *(next) {
    this.set('Access-Control-Allow-Origin', '*');
    yield next;
  });

  app.use(logger());
  app.use(json());

  app.use(route.get('/movies/', movies.all));
  app.use(route.get('/movies/:id', movies.single));

  app.listen(1337);

}());
