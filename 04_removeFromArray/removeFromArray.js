function removeFromArray(array, ...args) {
    array = array.filter(x => !args.includes(x))
    return array;
}



// Do not edit below this line
module.exports = removeFromArray;
