import {
  defineNamespace,
  defineProjections,
  Model as ОтелиMixin
} from '../mixins/regenerated/models/i-i-s-otel-отели';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтелиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
