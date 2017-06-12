
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('dog_breeds', function(table) {
    table.increments('id').primary();
    table.string('breed_name').notNullable();
    table.string('color').notNullable();
    table.integer('max_weight').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dog_breeds')
};
