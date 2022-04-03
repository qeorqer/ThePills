module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ios.jsx',
            '.android.jsx',
            '.jsx',
            '.jsx',
            '.js',
            '.json',
            '.svg',
          ],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@store': './src/store',
            '@navigation': './src/navigation',
            '@shared': './src/shared',
            '@icons': './assets/icons',
            '@images': './assets/images',
            '@fonts': './assets/fonts',
          },
        },
      ],
    ],
  };
};
