/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  const results = [];

  // Used another method but ended up not working. Copied the method from the answer
  // Didn't mutate the slices and only checked > with the same indexes, so [5, 10] with [2, 3] would end up as [2, 5, 3, 10].
  // When mutating, the numbers automatically shift to the first index so it keeps getting checked
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};

const mergeSort = (nums) => {
  // Base case that prevents infinite recursion, will always end up with the base case since we keep splitting the array until we get length < 2
  if (nums.length < 2) {
    return nums;
  }

  // Math.floor works as well, ceil just rounds up and floor rounds down
  // Math.round works too but in our case will function exactly the same as ceil since we always get 0.5 = 1 with both functions
  const half = Math.ceil(nums.length / 2);

  // Renamed from firstHalf and secondHalf, left and right are clearer and better names
  const left = nums.slice(0, half);
  // Same as half, nums.length. End of slice is automatically added when supplying one argument
  const right = nums.slice(half);

  // Perform recursive action by calling the same function
  // Merge merges/stitches the outcomes, basically from [1] & [2] to [1, 2, 3, 4] & [5, 6, 7, 8]
  // Pretty amazing application for recursion since it yields clean and consisive code
  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  console.log(ans);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
