var assert = {
  isTrue: function(testConditions){
    if (!testConditions){
      throw new Error("Test failed: " + testConditions);
    } else {
      console.log("Passed: " + testConditions)
    }
  }
};
