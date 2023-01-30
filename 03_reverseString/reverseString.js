const reverseString = function(string) {
    let result = "";
    let charArray = string.split("");
    for (let i = (charArray.length - 1); i >= 0; i--) {
        result += charArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
