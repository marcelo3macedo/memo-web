module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'auto',
  noMultiSpaces: true,
  useTabs: false,
  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
        'no-mixed-spaces-and-tabs': true,
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};