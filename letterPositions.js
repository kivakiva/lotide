const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.split(" ").join(``)
  for (let i = 0; i < newSentence.length; i++) {
    let character = newSentence[i];
    console.log(character);
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));