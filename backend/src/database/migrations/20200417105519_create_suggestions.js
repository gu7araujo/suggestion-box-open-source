
exports.up = function (knex) {
  return knex.schema.createTable('suggestions', function (t) {
    t.increments('suggestion_id');
    t.string('name').notNullable();
    t.string('suggestion').notNullable();
    t.string('phone');
    t.string('date').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('suggestions');
};
