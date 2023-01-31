const removeFromArray = function(array, ...elements) {
    const trueArray = Array.from(array);
    for (let i = 1; i < arguments.length; i++) {
        index = trueArray.indexOf(arguments[i]);
        if (index >= 0) {
            trueArray.splice(index, 1);
        }
    }
    return trueArray;
};

// Do not edit below this line
module.exports = removeFromArray;
