import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { RetentionBase } from '../tables/construction/Retention';

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
