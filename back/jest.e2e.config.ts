import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testRegex: 'e2e-spec\\.(ts|js)$',
  moduleNameMapper: pathsToModuleNameMapper({}, { prefix: '<rootDir>' }),
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  }
};
