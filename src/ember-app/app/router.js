import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel-авторизация-l');
  this.route('i-i-s-otel-авторизация-e',
  { path: 'i-i-s-otel-авторизация-e/:id' });
  this.route('i-i-s-otel-авторизация-e.new',
  { path: 'i-i-s-otel-авторизация-e/new' });
  this.route('i-i-s-otel-гости-l');
  this.route('i-i-s-otel-гости-e',
  { path: 'i-i-s-otel-гости-e/:id' });
  this.route('i-i-s-otel-гости-e.new',
  { path: 'i-i-s-otel-гости-e/new' });
  this.route('i-i-s-otel-допуск-l');
  this.route('i-i-s-otel-допуск-e',
  { path: 'i-i-s-otel-допуск-e/:id' });
  this.route('i-i-s-otel-допуск-e.new',
  { path: 'i-i-s-otel-допуск-e/new' });
  this.route('i-i-s-otel-комнаты-l');
  this.route('i-i-s-otel-комнаты-e',
  { path: 'i-i-s-otel-комнаты-e/:id' });
  this.route('i-i-s-otel-комнаты-e.new',
  { path: 'i-i-s-otel-комнаты-e/new' });
  this.route('i-i-s-otel-отели-l');
  this.route('i-i-s-otel-отели-e',
  { path: 'i-i-s-otel-отели-e/:id' });
  this.route('i-i-s-otel-отели-e.new',
  { path: 'i-i-s-otel-отели-e/new' });
});

export default Router;
