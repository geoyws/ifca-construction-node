import { ConstraintMap, DataTypeMap, Schema } from '@IFCASchemer/models';
import { ContractBase } from './ContractBase';

export class Subcontract extends ContractBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.Subcontract`,
      columns: [
        ['subcontractor', DataTypeMap.id, [ConstraintMap.NN], ''],
        ['contractId', DataTypeMap.id, [ConstraintMap.NN], ''],
      ],
    });
  }
}
