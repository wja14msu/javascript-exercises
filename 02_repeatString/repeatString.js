let string = "";
/*const repeatString = function() {
    for (i = 0; i < 3; i++) {
        string += 'hey'
    }
    return string;
};
*/
function repeatString(string, num) {
    if (num === 0) {
        return string = '';
    } else if (num < 0) {
        return string = 'ERROR';
    } else if (string === '') {
        return string = '';
    }
    for (i = 0; i < num - 1; i++) {
        string += 'hey';
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
