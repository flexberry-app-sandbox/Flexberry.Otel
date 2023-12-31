import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДопускMixin
} from '../mixins/regenerated/models/i-i-s-otel-допуск';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДопускMixin, Validations, {
});

defineProjections(Model);

export default Model;
