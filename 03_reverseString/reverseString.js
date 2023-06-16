function reverseString(string) {
    let revArray = [];
    let revString = '';
    let stringArray = string.split("");
    for (i = stringArray.length - 1; i >= 0; i--) {
        revArray.push(stringArray[i]);
        revString = revArray.join('');
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
