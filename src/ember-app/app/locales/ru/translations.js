import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Отель',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Отель',
          title: 'Отель'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
