import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { VOBase } from '../tables/CM/VO';

export class SCVO extends VOBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.SCVO`,
      columns: [
        ['subcontractor', DataTypeMap.id, [ConstraintMap.NN], ''], //
      ],
    });
  }
}
