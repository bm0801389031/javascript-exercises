const findTheOldest = function(array) {

return array.reduce((oldest, currentPerson) => {
    // oldestAge = 28
    console.log(oldest)
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

    return oldestAge < currentAge ? currentPerson : oldest
    
    })
};

const getAge = function(birth, death) {
    console.log(death)
    if (!death) {
    death = new Date().getFullYear();
    }
    return death - birth;
};

module.exports = findTheOldest;
