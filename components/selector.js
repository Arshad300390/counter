
export const selectFirstScore = (state) => {
  console.log("computing based on basic redux-selector 1st");
    return state.counter.firstScore;
  };
  
export const selectSecondScore = (state) => {
  console.log("computing based on basic redux-selector 2nd");
    return state.counter.secondScore;
  };
  
  export const selectThirdScore = (state) => {
    console.log("computing based on basic redux-selector 3rd");
    return state.counter.thirdScore;
  };