module.exports = {
    env: {
        // Среды
        es6: true,
        browser: true,
        node: true
    },
    ignorePatterns: ['**/dist/'], // Игнорируемые пути
    extends: [
        // Правила
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        // Пользовательские правила
        'no-shadow': 'warn',
        'max-classes-per-file': ['error', 10],
        'no-useless-constructor': 'off',
        'import/no-unresolved': 'warn',
        'import/extensions': 'warn'
    }
};
