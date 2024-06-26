module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'object-curly-spacing': 'off',
    'no-undef': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'none',
        noMultiSpaces: true,
        useTabs: false
      }
    ],
    quotes: ['error', 'single'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
  }
};
