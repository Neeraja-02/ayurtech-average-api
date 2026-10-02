let numbers = [];

/**
 * Add a number to the list.
 * @param {number} value
 */
function addNumber(value) {
    numbers.push(value);
}

/**
 * Calculate average of all numbers.
 * @returns {number}
 */
function calculateAverage() {
    if (numbers.length === 0) {
        return 0;
    }

    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total / numbers.length;
}

// Used for testing
function clearNumbers() {
    numbers = [];
}

module.exports = {
    addNumber,
    calculateAverage,
    clearNumbers
};