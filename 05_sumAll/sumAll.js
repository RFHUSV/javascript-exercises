const sumAll = function(firstInt, lastInt) {
    let sum = 0;
    if (firstInt < 0 || lastInt < 0) {
        return 'ERROR';
    }
    if ((typeof firstInt) !== "number" || (typeof lastInt) !== "number") {
        return 'ERROR';
    }

    if (firstInt <= lastInt) {
        for (let i = firstInt; i<= lastInt; i++) {
            sum += i;
        }
    } else {
        for (let i = firstInt; i>= lastInt; i--) {
            sum += i;
        }
    }  
    return sum;  
};

// Do not edit below this line
module.exports = sumAll;
