import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { RetentionBase } from './RetentionBase';

export class Retention extends RetentionBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.Retention`,
      columns: [
        ['customer', DataTypeMap.id, [ConstraintMap.NN], ''], //
      ],
    });
  }
}
