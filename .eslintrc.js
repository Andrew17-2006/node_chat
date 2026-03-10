module.exports = {
  extends: [
    '@mate-academy/eslint-config',
    'plugin:react/recommended',
  ],
  env: {
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest', 'react'],
  rules: {
    'no-proto': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
