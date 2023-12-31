import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыезда: DS.attr('date'),
  датаЗаселения: DS.attr('date'),
  комната: DS.attr('number'),
  авторизация: DS.belongsTo('i-i-s-otel-авторизация', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВыезда: {
    descriptionKey: 'models.i-i-s-otel-гости.validations.датаВыезда.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаЗаселения: {
    descriptionKey: 'models.i-i-s-otel-гости.validations.датаЗаселения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-otel-гости.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  авторизация: {
    descriptionKey: 'models.i-i-s-otel-гости.validations.авторизация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиE', 'i-i-s-otel-гости', {
    комната: attr('Комната', { index: 0 }),
    датаЗаселения: attr('Дата заселения', { index: 1 }),
    датаВыезда: attr('Дата выезда', { index: 2 }),
    авторизация: belongsTo('i-i-s-otel-авторизация', 'Авторизация', {
      имя: attr('Имя', { index: 4, hidden: true }),
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 3, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ГостиL', 'i-i-s-otel-гости', {
    авторизация: belongsTo('i-i-s-otel-авторизация', 'Имя', {
      имя: attr('Имя', { index: 0 }),
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true }),
    комната: attr('Комната', { index: 2 }),
    датаЗаселения: attr('Дата заселения', { index: 3 }),
    датаВыезда: attr('Дата выезда', { index: 4 })
  });
};
