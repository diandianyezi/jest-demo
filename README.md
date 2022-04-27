# jest

## Get Started

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// 运行npm run test 即可测试成功
```

## Running from command line

```shell
yarn global add jest
```

Here's how to run Jest on files matching `my-test`, using `config.json` as a configuration file and display a native OS notification after the run:

```shell
jest my-test --notify -config=config.json
```

## Additional Configuration

### Generate a basic configuration file

```shell
jest --init
```

### Using Babel

```shell
yarn add --dev babel-jest @babel/core @babel/preset-env
```

*The ideal configuration for Babel will depend on your project.* See [Babel's docs](https://babeljs.io/docs/en/) for more details.

### Using Typescript via Babel

Jest supports TypeScript, via Babel. First, make sure you followed the instructions on [using Babel](https://jestjs.io/docs/getting-started#using-babel) above. Next, install the `@babel/preset-typescript` via `yarn`:

```shell
yarn add --dev @babel/preset-typescript
```

Babel.config.js

```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```



### Using TypeScript via ts-jest

```sh
yarn add --dev ts-jest
```

You may also want to install the [`@types/jest`](https://www.npmjs.com/package/@types/jest) module for the version of Jest you're using. This will help provide full typing when writing your tests with TypeScript.

```sh
yarn add --dev @types/jest
```

