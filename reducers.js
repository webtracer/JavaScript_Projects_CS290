'use strict';
// Don't add or change anything above this comment.
// Name: Randy Bitts
// Email: bittsr@oregonstate.edu
// Assignment: Assignment 2, Part 2 - reducers
/**
 * See assignment description for the requirements
 */
function reducer1(previousValue, currentValue) {
   //  Write your code here
    if (typeof previousValue === "number" && typeof currentValue === "number") {
        return previousValue + currentValue;
    } else {
        if (typeof previousValue === "string" && typeof currentValue === "number") {
            return currentValue;
        } else  if (typeof previousValue === "number" && typeof currentValue !== "number"){
            return previousValue;
        } else {
            return 0;
        }
    }
};

/**
 * See assignment description for the requirements
 */
function reducer2(previousValue, currentValue){
    //  Write your code here
    if (typeof previousValue !== "number" || typeof currentValue !== "number") {
        throw new TypeError("You have entered an invalid data type: TypeError");
    } else {
        return previousValue + currentValue
    }
};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };