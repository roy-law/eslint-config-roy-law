# eslint-config-roy-law

ESLint config utilizing TypeScript, Prettier, Jest, React and React Native.

Plugins and configs used:

- Default config (w/ React and React Native):
  - Node config
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- Node config:
  - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
  - [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
    (applied for tests only, based on Jest's `testMatch` config)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
  - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

Additionally, it sets these environments:

Default config:

```json
{
  "env": {
    "es6": true,
    "node": true,
    "react-native/react-native": true
  }
}
```

Node config:

```json
{
  "env": {
    "es6": true,
    "node": true
  }
}
```

## Installation

```
npm install --save-dev eslint-config-roy-law
```

## Usage

Add to your ESLint config (`.eslintrc`, or `eslintConfig` field in
`package.json`):

```json
{
  "extends": "eslint-config-roy-law"
}
```

or for Node.js projects:

```json
{
  "extends": "eslint-config-roy-law"
}
```

### Example of extending the configuration

```json
{
  "extends": "eslint-config-roy-law",
  "rules": {
    "global-require": 0,
    "prefer-destructuring": 0
  }
}
```

### TypeScript

In order to use this config in TypeScript project make sure you have installed
following dependencies:

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`typescript`](https://www.npmjs.com/package/typescript)

Then when running ESLint add `--ext '.js,.ts'` (you might need also
`.jsx, .tsx`) option, for example:

```bash
eslint --ext '.js,.ts' ./src
```
