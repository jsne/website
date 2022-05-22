module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 90,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  importOrder: ['^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
