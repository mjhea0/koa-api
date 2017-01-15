(function() {

  'use strict';

  const fs = require('fs');
  const path = require('path');
  const FILE_NAME = 'movies.json';
  const FILE_PATH = path.resolve(__dirname, FILE_NAME);

  function readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(FILE_PATH, 'utf8', (err, res) => {
        if (!err) resolve(JSON.parse(res));
        else reject(err);
      });
    });
  }

  function getAllMovies() {
    return readFile()
    .then((res) => { return res; })
    .then((res) => { return res; })
    .catch((err) => { console.error(err); });
  }

  function getSingleMovie(id) {
    return readFile()
    .then((res) => { return filter(res, 'id', parseInt(id)); })
    .then((res) => { return res; })
    .catch((err) => { console.error(err); });
  }

  function filter(data, filterBy, value) {
    return data.filter((movie) => {
      return movie[filterBy] === value;
    });
  }

  module.exports = {
    getAllMovies,
    getSingleMovie
  };

}());
