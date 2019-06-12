import Table from '@IFCASchemer/classes/Table';
import {
  ColumnMap,
  ConstraintMap,
  DataTypeMap,
  Schema,
} from '@IFCASchemer/models';
import { LedgerBase } from '../tables/construction/Ledger';

export class APLedger extends LedgerBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.APLedger`,
      indexes: [
        'PRIMARY KEY (subscriberId, contractId, subcontractId, status, id)',
        'INDEX secondary (id)',
      ],
      partitions: [
        'PARTITION BY LIST(status)',
        `SUBPARTITION BY LINEAR KEY (subscriberId, contractId, subcontractId)
					SUBPARTITIONS 8 (
						PARTITION p0 VALUES IN (0),
						PARTITION p1 VALUES IN (1),
						PARTITION p2 VALUES IN (2),
						PARTITION p3 VALUES IN (3),
						PARTITION p4 VALUES IN (4)
				)`,
      ],
    });
  }
}
