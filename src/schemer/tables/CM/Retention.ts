import { columnsMap, constraintsMap, dataTypesMap } from '@IFCASchemer/models';
import Table from '@IFCASchemer/classes/Table';

export class RetentionBase extends Table {
  constructor() {
    super();
    this.mergeState({
      name: 'RetentionBase',
      columns: [
        columnsMap.id,
        columnsMap.subscriberId,
        ['contractId', dataTypesMap.id, [constraintsMap.notNull], ''],
        [
          'status',
          dataTypesMap.enum,
          [constraintsMap.notNull],
          '[Active, Inactive, Completed, Terminated, Deleted]',
        ],
        ['refNo', dataTypesMap.docRef, [], ''],
        columnsMap.description,
        ['released', dataTypesMap.ts, [], ''],
        columnsMap.amt,
        columnsMap.attachments,
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
