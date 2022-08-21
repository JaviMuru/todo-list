import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testRegex: 'spec\\.(ts|js)$',
  moduleNameMapper: pathsToModuleNameMapper({}, { prefix: '<rootDir>' }),
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  },
  globalSetup: '<rootDir>/global.setup.js'
};
