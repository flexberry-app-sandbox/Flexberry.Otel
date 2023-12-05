import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-отели', 'Unit | Serializer | i-i-s-otel-отели', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel-отели',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otel-доступа',
    'transform:i-i-s-otel-звезда',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
