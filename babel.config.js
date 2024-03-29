module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not dead', 'IE> 8']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: [
     '@babel/plugin-transform-modules-commonjs'
  ]
};