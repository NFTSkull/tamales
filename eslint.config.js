import js from '@eslint/js';

const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },
  js.configs.recommended,
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
      },
    },
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        IntersectionObserver: 'readonly',
        FormData: 'readonly',
        Event: 'readonly',
        alert: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      'no-console': isProd ? 'warn' : 'off',
    },
  },
];
