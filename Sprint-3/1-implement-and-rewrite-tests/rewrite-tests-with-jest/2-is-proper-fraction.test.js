// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test('should return false when numerator is zero', () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});
test('should return false when both numerator and denominator are zero', () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
test('should return false when numerator is negative', () => {
  expect(isProperFraction(-1, 2)).toEqual(false);
});
test('should return false when denominator is negative', () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});
test('should return false when both numerator and denominator are negative', () => {
  expect(isProperFraction(-1, -2)).toEqual(false);
});
test('should return true if numerator is less than denominator and both are positive', () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test('should return false if numerator is greater than denominator and both are positive', () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});
test('should return false if numerator is equal to denominator and both are positive', () => {
  expect(isProperFraction(1, 1)).toEqual(false);
}); 
