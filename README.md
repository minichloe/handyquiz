# Handy Quiz

Quiz web application built with React-Redux, Node.js, Express.js, and PostgresSQL.

## Prerequisites

1. Postgres is installed and running.
2. NPM is installed. If using yarn, change the command in package.json to `"start": "NODE_ENV='development' yarn build-client-watch & yarn server -e html,js,css --ignore public --ignore client"`


## Set up

1. `npm i`.
2. `npm run seed`, which will fill the database with a few submitted applicants.
3. `npm run start`
4. Navigate to http://www.localhost:1337
5. To log in as an admin, use email: admin@handy.com and password: handy
