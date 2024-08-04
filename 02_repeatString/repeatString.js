const repeatString = function(string, num) {
    
    if (num< 0){
        return 'ERROR';
    }
    let b = '';
    for (let i=0; i<num; i++){
        b += string;
    }
    return b;
};

// Do not edit below this line
module.exports = repeatString;
