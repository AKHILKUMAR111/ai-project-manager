// This is the new master config in: /ai-project-manager/.eslintrc.cjs
module.exports = {
  root: true,
  ignorePatterns: ['**/dist', '**/build', '**/coverage', '**/node_modules'],
  
  // Base configuration for all JavaScript files
  extends: ['eslint:recommended'],
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // Overrides for specific parts of the project
  overrides: [
    // Override for the Backend
    {
      files: ['backend/**/*.js'],
      env: {
        node: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:node/recommended',
        'prettier', // Add prettier here to disable conflicting style rules
      ],
      rules: {
        'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
        'node/no-unsupported-features/es-syntax': 'off', // Necessary because you use "type": "module"
      },
    },

    // Override for the Frontend
    {
      files: ['frontend/**/*.{ts,tsx}'],
      env: {
        browser: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./frontend/tsconfig.json'], // Tells TS ESLint where to find your TS config
      },
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
      ],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        '@typescript-eslint/recommended',
        'prettier', // Add prettier here to disable conflicting style rules
      ],
      settings: {
        react: { version: 'detect' },
      },
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};