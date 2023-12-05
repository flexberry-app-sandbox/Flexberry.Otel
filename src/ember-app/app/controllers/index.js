import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-otel-допуск-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-допуск-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-допуск-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-otel-отели-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-отели-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-отели-l.title'),
            children: null
          }, {
            link: 'i-i-s-otel-гости-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-гости-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-гости-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-otel-авторизация-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-авторизация-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-авторизация-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-otel-комнаты-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-комнаты-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-комнаты-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})