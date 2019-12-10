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
        'semi': ['error', 'never'],
        'indent': ['error', 4],
        'comma-dangle': ['error', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'linebreak-style': ['error', 'unix'],
    },
}