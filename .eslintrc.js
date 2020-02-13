module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [],
  rules: {
    'no-debugger': 'off',
    'no-console': 'off',
    'object-curly-newline': [
      'error', {
        ObjectExpression: {
          minProperties: 3,
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 3,
          consistent: true,
          multiline: true,
        },
      }
    ],
    indent: [
      'error',
      2
    ],
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
  },
};
