module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        allowImportExportEverywhere: true
    },
    plugins: [
        // "babel",
        'react'
    ],
    settings: {
        react: {
            pragma: 'React',
            version: '16.8'
        }
    },
    rules: {
        indent: ['warn', 4],
        semi: ['warn', 'always'],
        'linebreak-style': 'off',
        strict: 0,
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': 'error',
        'no-constant-condition': 'error',
        'no-dupe-keys': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable': 'error',
        'block-scoped-var': 'warn',
        'no-magic-numbers': ['warn', { ignore: [1], ignoreArrayIndexes: true }],
        'no-use-before-define': 'warn',
        'block-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        'object-curly-spacing': [
            'warn',
            'always',
            {
                arraysInObjects: false,  objectsInObjects: false
            }
        ],
        'comma-style': ['error', 'last'],
        'func-style': ['warn', 'expression'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'lines-between-class-members': 'error',
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true
            }
        ],
        'multiline-ternary': ['warn', 'always-multiline'],
        'no-lonely-if': 'error',
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': ['warn', { ignoreComments: true }],
        'no-whitespace-before-property': 'error',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: { '?': 'before', ':': 'before' }
            }
        ],
        'padded-blocks': ['warn', 'never'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: ['const', 'let'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let']}
        ],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single', { avoidEscape: true }],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': ['error', 'never'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'object-shorthand': 'error',
        'prefer-const': ['warn', { ignoreReadBeforeAssign: true }],
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'no-fallthrough': ['warn', { commentPattern: 'falls[\\s]*through' }],
        'react/button-has-type': 'error',
        'react/no-children-prop': 'error',
        'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-typos': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-state': 'warn',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': [2, { ignorePureComponents: false }],
        'react/require-render-return': 'error',
        'react/style-prop-object': 'error',
        'react/jsx-closing-bracket-location': 'warn',
        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-equals-spacing': 'warn',
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-key': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-space-before-closing': 'warn',
        'react/jsx-tag-spacing': [
            'warn', {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'allow'
            }
        ],
        'react/jsx-wrap-multilines': [
            'warn', {
                declaration: 'parens',
                assignment: 'parens',
                return: 'parens',
                arrow: 'parens',
                condition: 'ignore',
                logical: 'parens',
                prop: 'ignore'
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        'react/display-name': 'off'
    }
};
