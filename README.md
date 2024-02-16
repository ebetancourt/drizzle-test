# Sample Project to Play with Drizzle ORM

This is a little toy project I created to play a little bit with [Drizzle ORM](https://orm.drizzle.team/), and see if it really is as easy and simple to work with as it looks.


## Rational for Choosing Drizzle

I evaluated the following ORMs:

- [Objection.js](https://vincit.github.io/objection.js/guide/getting-started.html) / [Knex.js](https://knexjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Prisma](https://www.prisma.io/)
- [Sequelize](https://sequelize.org/)
- [slonik](https://github.com/gajus/slonik)

Eventually settling on Drizzle for the following reasons:

- light-weight implementation (has zero external dependencies)
- simple, concise model definition
- low-friction migrations
- offers both a SQL query interface and an ORM "Query" interface
- easy typing

It does have a few downsides:

- There isn't a command to just "set it up for you" - not a big deal since I just put this together in a couple of hours
- Objection seems like it might handle validation of nested JSON objects a little better
- You need to speficially declare your models for your Data Store - so if you are putting together a project that is SQLite for local dev, but Postgres in production, this isn't for you.
- the ORM "Query" ergonomics could be improved a little (mostly thinking of the `where`), the SQL backend shows through a little here.

## Requirements:

- NodeJs 18 or higher
- yarn
- Docker and Docker Compose

## Yarn Commands:

 - `yarn db:start` - spins up the docker instance with Postgres
 - `yarn db:stop` - shuts that instance down
 - `yarn db:generate` - automatically generates a migration file for you based on changes to your models
 - `yarn db:migrate` - runs migrations to update your database
 - `yarn db:seed` - takes dummy data, generates it, and inserts it into the database.
 - `yarn db:studio` - starts up [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview) - a simple UI for browsing your database, and making small changes.
 - `yarn dev` - just runs the simple test file in `index.ts`
