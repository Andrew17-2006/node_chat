module.exports = {
  extends: ['@mate-academy/eslint-config', 'plugin:react/recommended'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest', 'react'],
  rules: {
    'no-proto': 0,
    'react/react-in-jsx-scope': 'off',
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'all',
        allow: [],
      },
    ],
    'no-console': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
