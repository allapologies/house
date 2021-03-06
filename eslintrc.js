module.exports = {
    parser: 'babel-eslint',
    env: {
        es6: true
    },
    extends: 'airbnb',
    plugins: [
        'react'
    ],
    ecmaFeatures: {
        destructuring: true,
        jsx: true,
        modules: true,
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        spread: true,
        templateStrings: true,
        experimentalObjectRestSpread: true
    },
    rules: {
        'arrow-parens': [1, 'always'],
        'object-shorthand': [1, 'always'],
        'object-curly-spacing': [1, 'always'],
        'no-mixed-spaces-and-tabs': 1,
        'indent': [1, 4, { SwitchCase: 1 }],
        'no-shadow': 1,
        'semi': [1, 'never'],
        'jsx-quotes': [1, 'prefer-double'],
        'jsx-indent': [2, 2],
        'quotes': [1, 'single'],
        'vars-on-top': 1,
        'one-var': [1, 'never'],
        'no-undef-init': 1,
        'no-undefined': 2,
        'eol-last': 1,
        'dot-location': [1, 'property'],
        'dot-notation': 1,
        'yoda': [2, 'never'],
        'curly': [1, 'all'],
        'camelcase': [2, { properties: 'always' }],
        'block-spacing': [2, 'always'],
        'no-trailing-spaces': [1, { skipBlankLines: true }],
        'no-multiple-empty-lines': 1,
        'no-unused-vars': 1,
        'prefer-const': 0,
        'space-before-function-paren': [1, 'always'],
        'comma-dangle': 0,
        'no-var': 1,
        'padded-blocks': 0,
        'spaced-comment': 1,
        'no-param-reassign': 0,
        'func-names': 0,
        'strict': 0,
        // React
        'react/prefer-es6-class': 1,
        'react/sort-comp': [1, {
            order: [
                'lifecycle',
                '/^on.+$/',
                'everything-else',
                'render'
            ]
        }],
        'react/prop-types': 1,
        'react/no-multi-comp': 0
    }
}
