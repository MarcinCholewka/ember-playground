export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);

  server.create('todo', {
    title: 'first',
    isDone: true,
  });

  server.create('todo', {
    title: 'second',
    isDone: false,
  });
}
