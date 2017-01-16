(function() {

  'use strict';

  const fs = require('fs');
  const path = require('path');
  const faker = require('faker');

  const FILE_NAME = 'movies.json';
  const FILE_PATH = path.resolve(__dirname, FILE_NAME);

  seed();

  function seed() {
    generateData()
    .then((res) => { return writeFile(res); })
    .then((res) => { console.log('success!'); })
    .catch((err) => { console.error(err); });
  }

  function generateData() {
    return new Promise((resolve, reject) => {
      const movies = [];
      for (var i = 1; i < 100; i++) {
        movies.push({
          id: i,
          title: faker.random.words(),
          year: faker.date.past().getFullYear(),
          poster: faker.image.imageUrl()
        });
      }
      resolve(movies);
    });
  }

  function writeFile(data) {
    return new Promise((resolve, reject) => {
      const obj = JSON.stringify(data);
      fs.writeFile(FILE_PATH, obj, (err, res) => {
        if (!err) resolve(res);
        else reject(err);
      });
    });
  }

}());
