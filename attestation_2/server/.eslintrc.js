module.exports = {
  env: {
    // Среды
    es6: true,
    browser: true,
    node: true,
  },

  // ignorePatterns: ['**/dist/'], // Игнорируемые пути
  extends: 'eslint:recommended',
  // extends: [
  //   // Правила
  //   'airbnb',
  // ],
  plugins: ['prettier'],
  rules: {
    // Пользовательские правила
    'no-unused-vars': 'warn',
    // 'no-shadow': 'warn',
    // 'max-classes-per-file': ['error', 10],
    // 'no-useless-constructor': 'off',
    // 'import/no-unresolved': 'warn',
    // 'import/extensions': 'warn',
    // 'max-len': ['error', { code: 120, ignoreTrailingComments: true, ignoreUrls: true, ignoreComments: true }],
    // 'no-underscore-dangle': [2, { allowAfterThis: true }],
  },
};
