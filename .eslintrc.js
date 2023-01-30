module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import'],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: '@actions/*', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['@actions'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts'],
    },
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      typescript: {},
      node: {},
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
};
