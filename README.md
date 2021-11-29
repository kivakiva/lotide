# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kivakiva/lotide`

**Require it:**

`const _ = require('@kivakiva/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first element of array
* `tail(...)`: returns all elements after first in an array 
* `middle(...)`: returns middle element(s) of array. If array length is odd, returns array of both middle elments.
* `eqObjects(...)`: returns boolean testing object equality
* `findKey(...)`: returns key and accepts an object and function to test the key value pair
* `findKeyByValue(...)`: returns key and accepts object and value pair
* `flatten(...)`: flattens nested arrays with a nesting depth of 1
* `letterPositions(...)`: returns an object from a string. The object lists the indices at which each letter of the string appears.
* `map(...)`: applies a function to each element of an array
* `takeUntil(...)`: return a new array from argument array until callback function returns truthy value for one of the elements
* `without(...)`: accepts to arrays and returns a new array with all elements of the first array except those which are also present in the second array
* `countLetters(...)`: accepts a string and returns an object with keys for each unique letter in the string and value pairs for the number of occurences of that letter
* `countOnly(...)`: accepts an input array and an input object and returns an object with each element of the array which is listed as a key in the input argument with a value of true as a key with a value for the number of occurences in the array
* `eqArrays(...)`: retursn a boolean if two arrays are equal