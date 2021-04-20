import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { click } from '@ember/test-helpers';

module('Integration | Component | counter', (hooks) => {
  setupRenderingTest(hooks);

  test('it shows default counter value', async (assert) => {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');
  });

  test('it increments count value by 1 when Increment button is clicked ', async (assert) => {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');

    await click('.increment-button');

    assert.dom('.count').hasText('Count: 2');
  });

  test('it increments count value by 1 when Increment button is clicked ', async (assert) => {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');

    await click('.decrement-button');

    assert.dom('.count').hasText('Count: 0');
  });

  test('it changes text color to red when count is greater than 3', async (assert) => {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');
    assert.dom('.count').doesNotHaveClass('.red');

    await click('.increment-button');
    await click('.increment-button');
    await click('.increment-button');

    assert.dom('.count').hasText('Count: 4');
    assert.dom('.count').hasClass('red');
  });

  test('it has maxCount property', async (assert) => {
    await render(hbs`<Counter @maxCount={{5}} />`);

    assert.dom('.count').hasText('Count: 1');
    assert.dom('.count').doesNotHaveClass('.red');

    await click('.increment-button');
    await click('.increment-button');
    await click('.increment-button');
    await click('.increment-button');

    assert.dom('.count').hasText('Count: 5');
    assert.dom('.count').hasClass('red');
    assert.dom('.increment-button').isDisabled();
  });
});
