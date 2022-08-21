const {
  override,
  fixBabelImports,
  addLessLoader,
  adjustStyleLoaders,
} = require('customize-cra');

module.exports = override(
  // Load antd
  fixBabelImports('import', {
    libraryDirectory: 'es',
    style: true,
  }),

  // Add `javascriptEnabled` and antd theme configuration
  // to the Less loader
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),

  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
);
