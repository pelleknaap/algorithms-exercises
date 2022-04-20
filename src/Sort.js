import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // Sentinel variable
  let swapped = false;
  const correctMatches = {};

  do {
    swapped = false;

    for (let i = 0; i < nums.length; i++) {
      const j = i + 1;
      snapshot(nums);

      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
