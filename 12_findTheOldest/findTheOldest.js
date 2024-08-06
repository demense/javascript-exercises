const findTheOldest = function(people) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    people.map(a => {if (a.yearOfDeath === undefined){return a.yearOfDeath = currentYear}});
    let ages = people.map(a => a.yearOfDeath - a.yearOfBirth);
    let oldest = ages.indexOf(Math.max(...ages));
    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
