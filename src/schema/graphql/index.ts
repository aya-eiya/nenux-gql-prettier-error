import { extendType, objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('name')
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: User,
      async resolve() {
        return {
          name: 'john',
        }
      },
    })
  },
})
