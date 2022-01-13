import knex from "knex";

export const mariadb = knex({
  client: 'mysql',
  version: '10.4.22',
  connection: {
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'ba737235d69cd6',
    password:'163120f7',
    database: 'heroku_64fd557327bbe24'
  },//mysql://ba737235d69cd6:163120f7@us-cdbr-east-05.cleardb.net/heroku_64fd557327bbe24?reconnect=true
  pool:{min: 0, max:10}
})

