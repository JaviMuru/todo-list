module.exports = {
  preset: 'ts-jest',
  testRegex: '\\.ispec\\.(ts|js|tsx)$',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1'
  },
  setupFilesAfterEnv: ['./setupJest.ts']

};
