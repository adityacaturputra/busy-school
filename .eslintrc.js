module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': 'off',
    'no-multiple-empty-lines': 'warn',
    'react/self-closing-comp': 'warn',
    'no-console': 'warn',
    'no-empty': 'warn',
    'no-irregular-whitespace': 'warn',
  },
};
