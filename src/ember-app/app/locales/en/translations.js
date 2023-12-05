import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtelАвторизацияLForm from './forms/i-i-s-otel-авторизация-l';
import IISOtelГостиLForm from './forms/i-i-s-otel-гости-l';
import IISOtelДопускLForm from './forms/i-i-s-otel-допуск-l';
import IISOtelКомнатыLForm from './forms/i-i-s-otel-комнаты-l';
import IISOtelОтелиLForm from './forms/i-i-s-otel-отели-l';
import IISOtelАвторизацияEForm from './forms/i-i-s-otel-авторизация-e';
import IISOtelГостиEForm from './forms/i-i-s-otel-гости-e';
import IISOtelДопускEForm from './forms/i-i-s-otel-допуск-e';
import IISOtelКомнатыEForm from './forms/i-i-s-otel-комнаты-e';
import IISOtelОтелиEForm from './forms/i-i-s-otel-отели-e';
import IISOtelАвторизацияModel from './models/i-i-s-otel-авторизация';
import IISOtelГостиModel from './models/i-i-s-otel-гости';
import IISOtelДопускModel from './models/i-i-s-otel-допуск';
import IISOtelКомнатыModel from './models/i-i-s-otel-комнаты';
import IISOtelОтелиModel from './models/i-i-s-otel-отели';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel-авторизация': IISOtelАвторизацияModel,
    'i-i-s-otel-гости': IISOtelГостиModel,
    'i-i-s-otel-допуск': IISOtelДопускModel,
    'i-i-s-otel-комнаты': IISOtelКомнатыModel,
    'i-i-s-otel-отели': IISOtelОтелиModel
  },

  'application-name': 'Отель',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Отель',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Отель',
          title: 'Отель'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-otel-допуск-l': {
            caption: 'Допуск',
            title: ''
          },
          'i-i-s-otel-отели-l': {
            caption: 'Отели',
            title: ''
          },
          'i-i-s-otel-гости-l': {
            caption: 'Гости',
            title: ''
          },
          'i-i-s-otel-авторизация-l': {
            caption: 'Авторизация',
            title: ''
          },
          'i-i-s-otel-комнаты-l': {
            caption: 'Комнаты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otel-авторизация-l': IISOtelАвторизацияLForm,
    'i-i-s-otel-гости-l': IISOtelГостиLForm,
    'i-i-s-otel-допуск-l': IISOtelДопускLForm,
    'i-i-s-otel-комнаты-l': IISOtelКомнатыLForm,
    'i-i-s-otel-отели-l': IISOtelОтелиLForm,
    'i-i-s-otel-авторизация-e': IISOtelАвторизацияEForm,
    'i-i-s-otel-гости-e': IISOtelГостиEForm,
    'i-i-s-otel-допуск-e': IISOtelДопускEForm,
    'i-i-s-otel-комнаты-e': IISOtelКомнатыEForm,
    'i-i-s-otel-отели-e': IISOtelОтелиEForm
  },

});

export default translations;
