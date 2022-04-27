## Setup and Teardown



### Repeating Setup For Many Tests

If you have some work you need to do repeatedly for many tests, you can use `beforeEach` and `afterEach`.

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

`beforeEach`和`afterEach`can handle asynchronous code in the same ways that  [tests can handle asynchronous code](https://jestjs.io/docs/asynchronous) - they can either take a `done` parameter or return a promise. For example, if `initializeCityDatabase()` returned a promise that resolved when the database was initialized, we would want to return that promise:

```js
beforeEach(() => {
  return initializeCityDatabase();
});
```

### One-Time Setup

`beforeAll`和`afterAll`



### Scoping

By default, the `beforeAll` and `afterAll` blocks apply to every test in a file. You can also group tests together using a `describe` block. When they are inside a `describe` block, the `beforeAll` and `afterAll` blocks only apply to the tests within that `describe` block.

>  that the top-level `beforeEach` is executed before the `beforeEach` inside the `describe` block. It may help to illustrate the order of execution of all hooks.

```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

### Order of excution of describe and test blocks

Jest executes all describe handlers in a test file before it executes any of the actual tests.This is another reason to do setup and teardown inside `before*` and `after*` handlers rather than inside the describe blocks. Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on.

### General Advice

If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. To run only one test with Jest, temporarily change that `test` command to a `test.only`:

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```



If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with `beforeEach`. If you're not sure whether some shared state is being modified, you can also try a `beforeEach` that logs data.