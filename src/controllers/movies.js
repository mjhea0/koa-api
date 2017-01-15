'use strict';

var movies = require('../models/movies');

module.exports.all = function * all(next) {
  if ('GET' !== this.method) return yield next;
  const term = this.url.split('?');
  if(term.length > 1) {
    this.body = yield movies.getAllMovies(term[1].split('=')[1]);
  }
  this.body = yield movies.getAllMovies(null);
};

module.exports.single = function * single(id, next) {
  if ('GET' !== this.method) return yield next;
  this.body = yield movies.getSingleMovie(id);
};
