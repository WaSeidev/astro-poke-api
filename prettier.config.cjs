/** @type {import("prettier").Config} */
module.exports = {
  useTabs: false,
  printWidth: 100,
  doubleQuote: true,
  semi: true,
  trailingComma: 'es5',
  ...require('prettier-config-standard'),
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss')
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
