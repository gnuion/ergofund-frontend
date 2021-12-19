module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'error',
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
