import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  комнатаОт: DS.attr('number'),
  этаж: DS.attr('number'),
  отели: DS.belongsTo('i-i-s-otel-отели', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-otel-комнаты.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комнатаОт: {
    descriptionKey: 'models.i-i-s-otel-комнаты.validations.комнатаОт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-otel-комнаты.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отели: {
    descriptionKey: 'models.i-i-s-otel-комнаты.validations.отели.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатыE', 'i-i-s-otel-комнаты', {
    iD: attr('ID', { index: 0 }),
    комнатаОт: attr('Комната от', { index: 1 }),
    этаж: attr('Этаж', { index: 2 }),
    отели: belongsTo('i-i-s-otel-отели', 'Отели', {
      наименования: attr('Наименования', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименования' })
  });

  modelClass.defineProjection('КомнатыL', 'i-i-s-otel-комнаты', {
    iD: attr('ID', { index: 0 }),
    комнатаОт: attr('Комната от', { index: 1 }),
    этаж: attr('Этаж', { index: 2 }),
    отели: belongsTo('i-i-s-otel-отели', 'Наименования', {
      наименования: attr('Наименования', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
