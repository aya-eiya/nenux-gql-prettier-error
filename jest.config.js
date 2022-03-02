module.exports = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: '<rootDir>/tests/tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'node', 'd.ts'],
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
}
