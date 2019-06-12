import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { VOBase } from './VOBase';

export class VO extends VOBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.VO`,
      columns: [
        ['customer', DataTypeMap.id, [ConstraintMap.NN], ''], //
      ],
    });
  }
}
