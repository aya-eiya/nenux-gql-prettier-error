import { join } from 'path'
import { makeSchema } from 'nexus'
import * as types from './graphql'
export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '../generated', 'nexus-typegen.ts'),
    schema: join(__dirname, '../generated', 'schema.graphql'),
  },
  prettierConfig: join(__dirname, '../../.prettierrc.json'),
  nonNullDefaults: {
    output: true,
  },
})

export type AppSchema = typeof schema
