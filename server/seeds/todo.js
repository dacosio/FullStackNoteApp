//title - text
//priority - integer
//description - text or string
//done - boolean
//date - dateTime


exports.seed = function(knex) {
  return knex('todo').del() //remove all the rows in todo table
    .then(function () { //then create some samples todo
      const todos = [{
        title: 'Build a CRUD App',
        priority: 1,
        date: new Date()
      }, {
        title: 'Do the Dishes',
        priority: 3,
        date: new Date()
      }, {
        title: 'Render a view',
        priority: 2,
        date: new Date()
      }, {
        title: 'Walk the dog',
        priority: 5,
        date: new Date()
      }];

      return knex('todo').insert(todos); // insert to todo table
    });
};
