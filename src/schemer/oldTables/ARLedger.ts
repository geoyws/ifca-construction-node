import { LedgerBase } from '../tables/construction/Ledger';
import { Schema } from '@IFCASchemer/models';

export class ARLedger extends LedgerBase {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.ARLedger`,
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
