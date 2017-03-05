var assert = {
  isTrue: function(testConditions){
    if (!testConditions){
      throw new Error("Test failed: " + testConditions);
      console.error(testConditions);
    } else {
      console.log("Passed: " + testConditions)
    }
  }
};
