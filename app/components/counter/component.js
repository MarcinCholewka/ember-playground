import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 1;

  get isRed() {
    return this.count > 3;
  }

  get isIncrementDisabled() {
    return this.count >= this.args.maxCount;
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }
}
