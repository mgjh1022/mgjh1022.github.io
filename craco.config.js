const CracoAlias = require("craco-alias");

module.exports = {
  devServer: {
      port: 7733
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.json',
      }
    },
  ],
};
