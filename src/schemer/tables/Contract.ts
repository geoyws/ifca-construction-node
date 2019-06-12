import Table from '@IFCASchemer/classes/Table';
import {
  ColumnMap,
  ConstraintMap,
  DataTypeMap,
  Schema,
} from '@IFCASchemer/models';
import { ContractBase } from './ContractBase';

export class Contract extends ContractBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.Contract`,
      columns: [
        ['customer', DataTypeMap.id, [ConstraintMap.NN], ''], //
      ],
    });
  }
}
