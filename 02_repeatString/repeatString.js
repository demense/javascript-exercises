const repeatString = function(string, num) {
    if (num === 0){
        return ''
    } else if (num < 0) {
        return 'ERROR'
    }
    
    string2 = string;
    for (i = 1; i < num; i++) {
        string += string2;
    } return string
    
    
    
};

// Do not edit below this line
module.exports = repeatString;
