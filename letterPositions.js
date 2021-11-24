const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      let ele = sentence[i];
      console.log(ele)
      if (ele !== " ") {
        if (results[ele]) {results[ele].push(i)}
        else {results[ele] = [i]}
      }
    }
  return results;
};


console.log(letterPositions("lighthouse in the house"));