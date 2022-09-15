import operate from '../../../logic/operate';
import calculate from '../../../logic/calculate';

describe('Test if calculate & operate returns the correct answer', () => {
  test('Check if operate returns the correct answer', () => {
    const result = operate(3, 2, '-');
    expect(result).toBe('1');
  });

  test('Check if calculate returns the correct answer', () => {
    const obj = { total: 3, operation: '+', next: 4 };
    const result = calculate(obj, '=');
    expect(result.total).toBe('7');
  });

  test("Check if calculate isn't taking two operations in sequence", () => {
    const obj = { total: 3, operation: '+', next: null };
    const result = calculate(obj, '+');
    expect(result).toEqual(obj);
  });
});
