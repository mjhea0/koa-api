# Koa API

Just a simple RESTful API with [koajs](http://koajs.com/).

## Quick start

1. Fork/clone
1. Install dependencies
1. Seed Data - `npm run seed`
1. Run - `npm start`
1. Test - `npm test`

## API

| Route      | HTTP Verb | Action             |
|------------|-----------|--------------------|
| movies     | GET       | Get all movies     |
| movies/:id | GET       | Get a single movie |

Examples:

- http://localhost:1337/movies
- http://localhost:1337/movies?s=test
- http://localhost:1337/movies/4
