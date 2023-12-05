import { Serializer as ДопускSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel-допуск';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДопускSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
