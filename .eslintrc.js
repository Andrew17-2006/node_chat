module.exports = {
  extends: ['@mate-academy/eslint-config', 'plugin:react/recommended'],
  env: {
    jest: true,
    browser: true,
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
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
        ignoreRestSiblings: true,
      },
    ],
  },
  globals: {
    localStorage: 'readonly',
    WebSocket: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
