const assertEqual = require('./assertEqual');

const head = (array) => {

if (Array.isArray(array) && array.length > 0) {

return array[0]

} else {return undefined}

};

module.exports = head


