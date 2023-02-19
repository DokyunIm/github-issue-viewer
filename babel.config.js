module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@api': './src/api',
          '@component': './src/component',
          '@context': './src/context',
          '@hook': './src/hook',
          '@navigation': './src/navigation',
          '@screen': './src/screen',
          '@service': './src/service',
          '@type': './src/type',
        },
      },
    ],
    ['styled-components'],
  ],
};
