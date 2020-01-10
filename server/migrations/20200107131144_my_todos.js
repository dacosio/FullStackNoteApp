//title - text
//priority - integer
//description - text or string
//done - boolean
//date - dateTime


exports.up = function(knex) {
  return knex.schema.createTable('todo', (table)=> {
      table.increments();
      table.string('title').notNullable();
      table.integer('priority').notNullable();
      table.string('description');
      table.boolean('done').defaultTo(false).notNullable();
      table.dateTime('date').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('todo');
  
};
