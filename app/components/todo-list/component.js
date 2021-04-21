import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TodoListComponent extends Component {
  @service store;
  @tracked newTodoTitle;

  @action
  updateNewTodo(event) {
    this.newTodoTitle = event.target.value;
  }

  @action
  addNewTodo(event) {
    event.preventDefault();

    const newTodo = this.store.createRecord('todo', {
      title: this.newTodoTitle,
      isDone: false,
    });

    newTodo.save();
    this.newTodoTitle = '';
  }

  @action
  finishTodo(todo) {
    todo.isDone = !todo.isDone;
    todo.save();
  }
}
