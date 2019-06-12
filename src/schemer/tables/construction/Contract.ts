import Table from '@IFCASchemer/classes/Table';
import { ColumnMap, ConstraintMap, DataTypeMap } from '@IFCASchemer/models';

export class ContractBase extends Table {
  constructor() {
    super();
    this.mergeState({
      name: 'ContractBase',./Contract
      columns: [
        ColumnMap.id,
        ColumnMap.subscriberId,
        [
          'status',
          DataTypeMap.enum,
          [ConstraintMap.NN],
          '[Active, Inactive, Completed, Terminated, Deleted]',
        ],
        ['refNo', DataTypeMap.docRef, [], ''],
        ColumnMap.title,
        ColumnMap.description,
        ['awarded', DataTypeMap.ts, [ConstraintMap.NN], ''],
        ['start', DataTypeMap.ts, [ConstraintMap.NN], ''],
        ['end', DataTypeMap.ts, [ConstraintMap.NN], ''],
        ['CPCIssued', DataTypeMap.ts, [], ''],
        ['completed', DataTypeMap.ts, [], ''],
        ColumnMap.amt,
        ['retentionRate', DataTypeMap.pc, [ConstraintMap.NN], ''],
        ['retentionAmt', DataTypeMap.amt, [ConstraintMap.NN], ''],
        ['retentionReleasedAmt', DataTypeMap.amt, [ConstraintMap.NN], ''],
        ['guarantees', DataTypeMap.JSON, [], ''],
        [
          'contacts',
          DataTypeMap.JSON,
          [],
          'ContactId[] // stored on Angular as a set',
        ],
        ColumnMap.attachments,
      ],
      indexes: [
        'PRIMARY KEY (subscriberId, status, id)',
        'INDEX secondary (id)',
      ],
      partitions: [
        'PARTITION BY LIST(status)',
        `SUBPARTITION BY LINEAR KEY (subscriberId)
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

// @TODO change this to instead be derived from a single class via TypeScript decorators in the source code
