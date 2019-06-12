import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { RetentionBase } from '../tables/construction/Retention';

export class SCRetention extends RetentionBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.SCRetention`,
      columns: [
        ['subcontractor', DataTypeMap.id, [ConstraintMap.NN], ''], //
      ],
    });
  }
}
