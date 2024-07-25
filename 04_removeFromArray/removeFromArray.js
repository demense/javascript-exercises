const removeFromArray = function(arg1, ...arg2){
    arg2 = Array.from(arg2);
    function isEqualTo(value) {
        return !(arg2.includes(value));    
    }
    filteredArray = arg1.filter(isEqualTo);
    return filteredArray
}
    

// Do not edit below this line
module.exports = removeFromArray;
