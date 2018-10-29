# Handy Quiz

Quiz web application built with React-Redux, Node.js, Express.js, and PostgresSQL.

## Prerequisites

1. Postgres is installed and running.
2. NPM is installed. If using yarn, change the command in package.json to `"start": "NODE_ENV='development' yarn build-client-watch & yarn server -e html,js,css --ignore public --ignore client"`


## Set up

1. `npm i`.
2. `createdb handyquiz`, which will create a new database.
3. `npm run seed`, which will fill the database with a few submitted applicants.
4. `npm run start`
5. Navigate to http://www.localhost:1337
6. To log in as an admin, use
  - email: admin@handy.com
  - password: handy
