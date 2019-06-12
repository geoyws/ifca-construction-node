import Table from '@IFCASchemer/classes/Table';
import { columnsMap, constraintsMap, dataTypesMap } from '@IFCASchemer/models';

export class ContractBase extends Table {
  constructor() {
    super();
    this.mergeState({
      name: 'ContractBase',
      columns: [
        columnsMap.id,
        columnsMap.subscriberId,
        [
          'status',
          dataTypesMap.enum,
          [constraintsMap.notNull],
          '[Active, Inactive, Completed, Terminated, Deleted]',
        ],
        ['referenceNumber', dataTypesMap.documentReference, [], ''],
        columnsMap.title,
        columnsMap.description,
        ['awarded', dataTypesMap.timestamp, [constraintsMap.notNull], ''],
        ['start', dataTypesMap.timestamp, [constraintsMap.notNull], ''],
        ['end', dataTypesMap.timestamp, [constraintsMap.notNull], ''],
        ['CPCIssued', dataTypesMap.timestamp, [], ''],
        ['completed', dataTypesMap.timestamp, [], ''],
        columnsMap.amount,
        [
          'retentionRate',
          dataTypesMap.percentage,
          [constraintsMap.notNull],
          '',
        ],
        ['retentionAmt', dataTypesMap.amount, [constraintsMap.notNull], ''],
        [
          'retentionReleasedAmt',
          dataTypesMap.amount,
          [constraintsMap.notNull],
          '',
        ],
        ['guarantees', dataTypesMap.JSON, [], ''],
        [
          'contacts',
          dataTypesMap.JSON,
          [],
          'ContactId[] // stored on Angular as a set',
        ],
        columnsMap.attachments,
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
