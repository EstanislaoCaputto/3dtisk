import knex from "knex";

export const mariadb = knex({
    client: 'mysql',
    version: '5.6.45',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'cs000417_dbTano',
      password:'fo41daSOme',
      database: 'cs000417_dbTano'
    },
    pool:{min: 0, max:10}
})

mariadb.schema.hasTable('wp_woocommerce_order_items').then(result=>{
    console.log(result);
})