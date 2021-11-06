module.exports = {
  env: {
    // Среды
    es6: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  //ignorePatterns: ["**/dist/"], // Игнорируемые пути
  extends: [
    // Правила
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    'airbnb',
    'airbnb-typescript'
  ],
  plugins: ['prettier', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  rules: {
    // Пользовательские правила
    // "no-shadow": "warn",
    // "max-classes-per-file": ["error", 10],
    // "no-useless-constructor": "off",
    // "import/no-unresolved": "warn",
    // "import/extensions": "warn",
    // "max-len": [
    //   "error",
    //   {
    //     code: 120,
    //     ignoreTrailingComments: true,
    //     ignoreUrls: true,
    //     ignoreComments: true,
    //   },
    // ],
    // "no-underscore-dangle": [2, { allowAfterThis: true }],
    'react/prefer-stateless-function': 'off',
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-access-state-in-setstate': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreComments: true
      }
    ],
    'class-methods-use-this': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unused-state': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};
