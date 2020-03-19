const extensions = require('./extensions');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    require.resolve('./node.js'),
    'plugin:react/recommended',
    'prettier/react',
  ],
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/display-name': OFF,
    'react/no-multi-comp': [WARNING, { ignoreStateless: true }],
    'react/no-unused-prop-types': OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': OFF,
    'react-native/no-inline-styles': WARNING,
    'react-native/no-color-literals': WARNING,
    'react-native/no-raw-text': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/extensions': [...extensions.JS, ...extensions.JS_REACT_NATIVE],
        'import/resolver': {
          node: {
            extensions: [...extensions.JS, ...extensions.JS_REACT_NATIVE],
          },
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/extensions': extensions.ALL,
        'import/resolver': {
          node: {
            extensions: extensions.ALL,
          },
        },
      },
    },
  ],
};
