/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // Sentinel variable
  let swapped = false;
  let swaps = 0;

  do {
    swapped = false;

    for (let i = 0; i < nums.length; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        swaps++;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log(swaps);

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
