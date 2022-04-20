/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

const map = {
  1: 1,
  2: 2,
  3: 6
};

function factorial(n) {
  let sum = 0;

  if (map[n]) {
    return map[n];
  } else {
    sum += n * factorial(n - 1);
  }

  return sum;
}

// unit tests
// do not modify the below code
test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(4)).toEqual(24);
  expect(factorial(10)).toEqual(3628800);
});
