import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-допуск', 'Unit | Model | i-i-s-otel-допуск', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otel-авторизация',
    'model:i-i-s-otel-гости',
    'model:i-i-s-otel-допуск',
    'model:i-i-s-otel-комнаты',
    'model:i-i-s-otel-отели',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
