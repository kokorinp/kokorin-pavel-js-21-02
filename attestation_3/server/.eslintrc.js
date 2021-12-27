module.exports = {
  // extends: 'eslint:recommended',
  // extends: 'airbnb-base',
  // extends: [
  //   // Правила
  //   'airbnb',
  // ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2021,
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  env: {
    // Среды
    es6: true,
    browser: true,
    node: true,
  },

  // ignorePatterns: ['**/dist/'], // Игнорируемые пути

  plugins: ['prettier'],
  rules: {
    // Пользовательские правила
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'warn',
    'new-cap': 'warn',
    'linebreak-style': ['error', 'windows'],
    // 'no-shadow': 'warn',
    // 'max-classes-per-file': ['error', 10],
    // 'no-useless-constructor': 'off',
    // 'import/no-unresolved': 'warn',
    // 'import/extensions': 'warn',
    // 'max-len': ['error', { code: 120, ignoreTrailingComments: true, ignoreUrls: true, ignoreComments: true }],
    // 'no-underscore-dangle': [2, { allowAfterThis: true }],
  },
};
