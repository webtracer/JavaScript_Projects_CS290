'use strict';
// Don't add or change anything above this comment.
// Name: Randy Bitts
// Email: bittsr@oregonstate.edu
// Assignment: Assignment 2, Part 1 - deepEqual
/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    // Get the types of the values passed in, set the starter boolean return to true
    let val1Type= typeof(val1);
    let val2Type= typeof(val2);
    let overall = true;
    let stored_overall;

    if (val1 === val2) {
        return overall;
    } else if (typeof val1 !== typeof val2) {
        return false;
    } else {
        if (val1Type === "object" || val2Type === "object") {  // If the values passed are objects
            if (val1 === null || val2 === null) {   // If the values of one is null, compare and return
                return val1 === val2;
            } else if (val1.length !== val2.length) {  // if they aren't the same length, return
                return false
            } else if (val1[0] !== undefined && val2[0] !== undefined ) {  //check if they are both arrays
                for (let i = 0; i < val1.length; i++) {
                    if (val1[i] !== val2[i]) {  // check if they next value is also an array
                        if ( typeof val1[i] === "object"  && typeof val2[i] === "object") {  // if they are, loop
                            for (let j = 0; j < val1[i].length; j++) {
                                if (val1[i][j] !== val2[i][j]) {
                                    return false;
                                }
                            }
                        } else {  // One isn't an array, so not deepEqual
                            return false
                        }
                    }
                }
            }else { // they are both objects but not arrays, so get the values in sorted order for comparison
                let firstSet = getValues(val1);
                let secondSet = getValues(val2);
                for (let i = 0; i < firstSet.length; i++) {
                    if (typeof firstSet[i] !== typeof secondSet[i]) {
                        return false
                    } else if (firstSet[i] === secondSet[i]) {
                        overall = true;
                    } else {
                        return  false
                    }
                }
            }
        } else {
            return val1 === val2;
        }
    }
    return overall;
}

function getValues(valueToCheck) {
    let values = [];
    for (const key in valueToCheck) {
        if (valueToCheck.hasOwnProperty(key) && typeof valueToCheck[key] !== "object") {
            if (valueToCheck[key] !== undefined) {
                values.push(valueToCheck[key]);
            }
        } else {
            for (const secondaryKey in valueToCheck[key]) {
                if (valueToCheck[key][secondaryKey] !== undefined) {
                    values.push(valueToCheck[key][secondaryKey]);
                }
            }
        }
    }
    return values.sort();
}

// Don't add or change anything below this comment.
module.exports = deepEqual;