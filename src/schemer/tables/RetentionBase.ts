import { ColumnMap, ConstraintMap, DataTypeMap } from '@IFCASchemer/models';
import Table from '@IFCASchemer/classes/Table';

export class RetentionBase extends Table {
  constructor() {
    super();
    this.mergeState({
      name: 'RetentionBase',
      columns: [
        ColumnMap.id,
        ColumnMap.subscriberId,
        ['contractId', DataTypeMap.id, [ConstraintMap.NN], ''],
        [
          'status',
          DataTypeMap.enum,
          [ConstraintMap.NN],
          '[Active, Inactive, Completed, Terminated, Deleted]',
        ],
        ['refNo', DataTypeMap.docRef, [], ''],
        ColumnMap.description,
        ['released', DataTypeMap.ts, [], ''],
        ColumnMap.amt,
        ColumnMap.attachments,
      ],
      indexes: [
        'PRIMARY KEY (subscriberId, contractId, status, id)',
        'INDEX secondary (id)',
      ],
      partitions: [
        'PARTITION BY LIST(status)',
        `SUBPARTITION BY LINEAR KEY (subscriberId, contractId)
					SUBPARTITIONS 8 (
						PARTITION p0 VALUES IN (0),
						PARTITION p1 VALUES IN (1),
						PARTITION p2 VALUES IN (2),
						PARTITION p3 VALUES IN (3),
						PARTITION p4 VALUES IN (4)
				)`,
      ],
      others: [],
    });
  }
}
