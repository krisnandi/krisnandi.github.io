module.exports = {
  extends: 'eslint-config-antife',

  rules: {
    'no-unused-vars': 2,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
}
