const findTheOldest = function(arr) {
    let newObject = arr.reduce((total, item) => {
        if (!item.yearOfDeath) {
            item.yearOfDeath = new Date().getFullYear();
        }
        let age = item.yearOfDeath - item.yearOfBirth
        total.push({...item, age});
        return total;
    }, []);

    newObject.sort((a,b) => b.age-a.age);
        
    return newObject[0];
};

// Do not edit below this line
module.exports = findTheOldest;
