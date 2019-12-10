module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base/legacy',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "comma-dangle": ["error", "never"],
        // 'linebreak-style': ['error', 'windows'],
    },
};
