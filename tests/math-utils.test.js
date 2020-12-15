import { sum } from '../src/math-utils';

test('Args "1, 2, 3, 4" returns "10"', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
