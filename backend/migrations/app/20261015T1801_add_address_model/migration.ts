#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/10d1100588c21933901a1a9387cdbc8742e8a3d1034b02579472ebb49ad90841/contract';
import endContract from '../../snapshots/10d1100588c21933901a1a9387cdbc8742e8a3d1034b02579472ebb49ad90841/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/4253badbeba305535263d4f0b230f7b8f3e05b9a9f86e4f8386fd978f6353602/contract';
import startContract from '../../snapshots/4253badbeba305535263d4f0b230f7b8f3e05b9a9f86e4f8386fd978f6353602/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'Address',
        columns: [
          col('city', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('country', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('userId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Address',
        index: 'Address_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Address',
        foreignKey: {
          name: 'Address_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'User', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
