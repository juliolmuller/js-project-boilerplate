
module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    '@lacussoft',
  ],
  ignorePatterns: [
    'build/',
    'dist/',
    '!.babelrc*',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
  },
};
