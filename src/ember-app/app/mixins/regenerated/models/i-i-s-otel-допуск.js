import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('i-i-s-otel-доступа'),
  гости: DS.belongsTo('i-i-s-otel-гости', { inverse: null, async: false }),
  комнаты: DS.belongsTo('i-i-s-otel-комнаты', { inverse: null, async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-otel-допуск.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel-допуск.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комнаты: {
    descriptionKey: 'models.i-i-s-otel-допуск.validations.комнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДопускE', 'i-i-s-otel-допуск', {
    комнаты: belongsTo('i-i-s-otel-комнаты', 'Комнаты', {
      комнатаОт: attr('КомнатыОт', { index: 1, hidden: true }),
      отели: belongsTo('i-i-s-otel-отели', '', {
        наименования: attr('Наименование', { index: 4, hidden: true })
      }, { index: 5, hidden: true })
    }, { index: 0, displayMemberPath: 'iD' }),
    гости: belongsTo('i-i-s-otel-гости', 'Гости', {
      комната: attr('КомнатаГостя', { index: 3, hidden: true }),
      авторизация: belongsTo('i-i-s-otel-авторизация', '', {
        имя: attr('Имя', { index: 6, hidden: true }),
        фамилия: attr('Фамилия', { index: 7, hidden: true })
      }, { index: 8, hidden: true })
    }, { index: 2 }),
    доступ: attr('Доступ', { index: 9 })
  });

  modelClass.defineProjection('ДопускL', 'i-i-s-otel-допуск', {
    гости: belongsTo('i-i-s-otel-гости', 'Имя', {
      авторизация: belongsTo('i-i-s-otel-авторизация', '', {
        имя: attr('Имя', { index: 0 }),
        фамилия: attr('Фамилия', { index: 1 })
      }, { index: -1, hidden: true }),
      комната: attr('КомнатаГостя', { index: 4 })
    }, { index: -1, hidden: true }),
    комнаты: belongsTo('i-i-s-otel-комнаты', 'Наименование', {
      отели: belongsTo('i-i-s-otel-отели', '', {
        наименования: attr('Наименование', { index: 2 })
      }, { index: -1, hidden: true }),
      комнатаОт: attr('КомнатаОт', { index: 3 })
    }, { index: -1, hidden: true }),
    доступ: attr('Доступ', { index: 5 })
  });
};
