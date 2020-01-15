it('adds to items', () => {
  const testFunc = (a, b) => a + b;
  expect(testFunc(3, 5)).not.toBe(9);
});

const stuff = ['leaf', 'bucket', 'digger', 'dog'];

it('contain any animals', () => {
  expect(stuff).toContain('dog');
});
