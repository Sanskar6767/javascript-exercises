const palindromes = function (str) {
    let filtered = str.replace(/[^\w]/g, '').toLowerCase();
    let checkfiltered = filtered.split('').reverse().join('');
    return filtered === checkfiltered;

};

// Do not edit below this line
module.exports = palindromes;
