import Table from '@IFCASchemer/classes/Table';
import {
  ColumnMap,
  ConstraintMap,
  DataTypeMap,
  Schema,
} from '@IFCASchemer/models';

export class Contact extends Table {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.Contact`,
      columns: [
        ColumnMap.id, // this has to match CG.Contact directly
        ColumnMap.subscriberId,
        ['accountId', DataTypeMap.id, [ConstraintMap.NN], ''],
        ['status', DataTypeMap.enum, [ConstraintMap.NN], '[Active, Inactive]'],
        ColumnMap.designation,
        ColumnMap.division,
        ColumnMap.description,
        ColumnMap.attachments,
      ],
      indexes: [
        'PRIMARY KEY (subscriberId, accountId, status, id)',
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
    });
  }
}
