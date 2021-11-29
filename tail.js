const assertEqual = require('./assertEqual');

const tail = (array) => {

  if (Array.isArray(array)) {
  
    return array.slice(1);
  
  } else {
    return undefined;
  }
  
};

module.exports = tail;

