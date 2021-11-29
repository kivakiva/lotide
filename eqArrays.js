
const eqArrays = (arr1, arr2) => {

  let longLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < longLength; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      const current1 = arr1[i]
      const current2 = arr2[i]
      const remainder1 = arr1.slice(i +1);
      const remainder2 = arr2.slice(i +1)
      if (!eqArrays(current1, current2)) {
        return false;
      } else if (Array.isArray(remainder1) && Array.isArray(remainder2)) {
          return eqArrays(remainder1, remainder2)
      } else {
        return remainder1 === remainder2}
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

