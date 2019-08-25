const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(Math.max(drivers.length-2,1))
    // drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// practice the anon function syntax: 
// const createFareMultiplier = function(multiplier){
//     return function(fare){
//         return multiplier * fare
//     }
// }

function createFareMultiplier(multiplier){
    return function(fare){
        return multiplier * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers)
}