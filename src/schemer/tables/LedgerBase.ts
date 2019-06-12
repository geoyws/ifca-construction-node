import Table from '@IFCASchemer/classes/Table';
import {
  ColumnMap,
  ConstraintMap,
  DataTypeMap,
  Schema,
} from '@IFCASchemer/models';

export class LedgerBase extends Table {
  constructor() {
    super();
    this.mergeState({
      name: 'LedgerBase',
      columns: [
        ColumnMap.id,
        ColumnMap.subscriberId,
        ['contractId', DataTypeMap.id, [ConstraintMap.NN], ''],
        ['subcontractId', DataTypeMap.id, [ConstraintMap.NN], ''],
        [
          'status',
          DataTypeMap.enum,
          [ConstraintMap.NN],
          '[Active, Inactive, Completed, Terminated, Deleted]',
        ],
        ColumnMap.description,
        ColumnMap.docRef,
        ['approved', DataTypeMap.ts, [], ''],
        ['approvedBy', DataTypeMap.id, [], ''],
        ['posted', DataTypeMap.ts, [], ''],
        ['postedBy', DataTypeMap.id, [], ''],
        ColumnMap.amt,
        ['amt', DataTypeMap.amt, [ConstraintMap.NN], ''],
        ['taxAmt', DataTypeMap.amt, [ConstraintMap.NN], ''],
        ['balAmt', DataTypeMap.amt, [ConstraintMap.NN], ''],
        [
          'breakdown',
          DataTypeMap.JSON,
          [ConstraintMap.NN],
          `[{ ledgerItId, refType: ENUM[Retention, GRN], refId: EntityId, amt, taxAmt, balAmt, desc }...]`,
        ],
        ColumnMap.attachments,
      ],
      // indexes: ['PRIMARY KEY (subscriberId, status, id)', 'INDEX secondary (id)'],
      // partitions: [
      // 	'PARTITION BY LIST(status)',
      // 	`SUBPARTITION BY LINEAR KEY (subscriberId)
      //     SUBPARTITIONS 8 (
      // 			PARTITION p0 VALUES IN (0),
      // 			PARTITION p1 VALUES IN (1),
      // 			PARTITION p2 VALUES IN (2),
      // 			PARTITION p3 VALUES IN (3),
      // 			PARTITION p4 VALUES IN (4)
      //   )`,
      // ],
      // others: [],
    });
  }
}
