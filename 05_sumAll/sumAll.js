const sumAll = function(start, end) {
    let nums = [];
    let sum = 0;

    if ((start < 0) || (end < 0) || !(Number.isInteger(start)) || !(Number.isInteger(end)) || (isNaN(start)) || (isNaN(end))) {
        return 'ERROR';
    }

    if (start < end ) { 
        for (i = start; i <= end; i++) {
            nums.push(i);
        }
    } else if (start > end) {
        for (i = start; i >= end; i--) {
            nums.push(i);
        }
    }

    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
