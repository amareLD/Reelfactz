// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: 'airbnb',
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: ['.eslintrc.{js,cjs}'],
//       parserOptions: {
//         sourceType: 'script',
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   rules: {
//     'linebreak-style': 'off',
//   },

// module.exports = {
//   extends: ['react-app'],
//   rules: {
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
//   }

// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'react-app'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
