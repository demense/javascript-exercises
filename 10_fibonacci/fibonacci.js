const fibonacci = function(nth) {
    if (nth < 0) return "OOPS";
    parseInt(nth);
    let fiboSeq = [0,1];
    for (i = 0; i < nth; i++) {
        sum = fiboSeq[i] + fiboSeq[i+1];
        fiboSeq.push(sum);
    }
    return fiboSeq[nth];
};

// Do not edit below this line
module.exports = fibonacci;
