#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/380da9d8f603a09eeb90749985b746826cf0b6142fc2fc3eb044b32e624fbc7f/contract';
import startContract from '../../snapshots/380da9d8f603a09eeb90749985b746826cf0b6142fc2fc3eb044b32e624fbc7f/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/4253badbeba305535263d4f0b230f7b8f3e05b9a9f86e4f8386fd978f6353602/contract';
import endContract from '../../snapshots/4253badbeba305535263d4f0b230f7b8f3e05b9a9f86e4f8386fd978f6353602/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, sql } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumnWithTemporaryDefault({
        schema: 'public',
        table: 'User',
        column: 'age',
        type: 'int4',
        temporaryDefault: sql`0`,
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
