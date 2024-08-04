const sumAll = function(num1, num2) {
    let sum = 0 ;
    let bnum;
    let snum;
    if (num1 < 0 || num2 < 0){
        return ('ERROR');
    } else if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return ('ERROR');
    } else {
        if (num1>num2) {
            bnum= num1;
            snum= num2;
        } else {
            bnum = num2;
            snum = num1;
        }
    }
    for (let i = snum; i<(bnum+1); i++){
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;



