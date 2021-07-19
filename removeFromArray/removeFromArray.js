// we have 2 solutions here, an easier one and a more advanced one.
const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      console.log(item)
      console.log(args)

      if (!args.includes(item)) {
        newArray.push(item);
        console.log(newArray)
      }
    });
    // and return that array
    return newArray;
  };
module.exports = removeFromArray;
