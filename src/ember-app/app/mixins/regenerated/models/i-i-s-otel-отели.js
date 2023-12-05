import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  звезды: DS.attr('i-i-s-otel-звезда'),
  наименования: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-otel-отели.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  звезды: {
    descriptionKey: 'models.i-i-s-otel-отели.validations.звезды.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименования: {
    descriptionKey: 'models.i-i-s-otel-отели.validations.наименования.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтелиE', 'i-i-s-otel-отели', {
    наименования: attr('Наименования', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    звезды: attr('Звезды', { index: 2 })
  });

  modelClass.defineProjection('ОтелиL', 'i-i-s-otel-отели', {
    наименования: attr('Наименования', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    звезды: attr('Звезды', { index: 2 })
  });
};
