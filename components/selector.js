// Core
import { createSelector } from "reselect";

export const selectFirstScore = createSelector(
  (state) => state.counter.firstScore,
  (firstScore) => {
    console.log("computing based on 'reselect' 1st ");
    return firstScore
  }
);

export const selectSecondScore = createSelector(
  (state) => state.counter.secondScore,
  (secondScore) => {
    console.log("computing based on 'reselect' 2nd ");
    return secondScore
  }
);

export const selectThirdScore = createSelector(
  (state) => state.counter.thirdScore,
  (thirdScore) => {
    console.log("computing based on 'reselect' 3rd ");
    return thirdScore;
  }
);