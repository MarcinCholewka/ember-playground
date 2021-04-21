import Route from '@ember/routing/route';

export default class ListRoute extends Route {
  async model() {
    return this.store.findAll('todo');
    // return [
    //   { title: 'first', isDone: false },
    //   { title: 'second', isDone: true },
    // ];
  }
}
