import Table from '@IFCASchemer/classes/Table';
import {
  columnsMap,
  constraintsMap,
  dataTypesMap,
  Schema,
} from '@IFCASchemer/models';

export class User extends Table {
  constructor(schema: Schema) {
    super();
    this.mergeState({
      name: `${schema}.Account`,
      columns: [
        columnsMap.id,
        [
          'status',
          dataTypesMap.enum,
          [constraintsMap.notNull],
          '[Active, Inactive]',
        ],
        ['username', dataTypesMap.text, [constraintsMap.notNull], ''],
        ['passHash', dataTypesMap.text, [constraintsMap.notNull], ''],
        ['passSalt', dataTypesMap.text, [constraintsMap.notNull], ''],
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
    });
  }
}
