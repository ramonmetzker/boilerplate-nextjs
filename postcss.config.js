module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes'[
            ('postcss-preset-env',
            {
              autoprefixer: { flexbox: 'no-2009' },
              stage: 3,
              features: { 'custom-properties': true }
            })
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './src/**/*.{js,jsx,ts,tsx}',
                './pages/**/*.{js,jsx,ts,tsx}'
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: ['html', 'body']
            }
          ]
        ]
      : []
}
