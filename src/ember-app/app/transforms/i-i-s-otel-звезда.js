import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЗвездаEnum from '../enums/i-i-s-otel-звезда';

export default FlexberryEnum.extend({
  enum: ЗвездаEnum,
  sourceType: 'IIS.Otel.Звезда'
});
