// Airbnb eslint + react[-hooks] + prettier + typescript
// From https://gist.github.com/mvllow/c1eeeafb6868dc523b1bcb78644ec769

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  /// Start typescript
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  /// End typescript
  rules: {
    // Point out prettier errors via eslint
    'prettier/prettier': 'error',

    // No harm eh?
    'no-plusplus': 0,
    'react/jsx-props-no-spreading': 0,

    // Allow triple slash comments (common in .d.ts files)
    'spaced-comment': ['error', 'always', { markers: ['/'] }],

    // Prefer typescript
    'react/prop-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'error',

    // NextJS handles react in scope
    'react/react-in-jsx-scope': 0,

    // Clashes with NextJS custom Link component for internal navigation
    'jsx-a11y/anchor-is-valid': 0,

    // Airbnb does not natively support ts/tsx
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    'react/jsx-filename-extension': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
