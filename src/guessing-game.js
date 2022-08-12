let minNum = 0;
let maxNum = 0;
let result;

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        minNum = min;
        maxNum = max;
    }

    guess() {
        result = Math.round((minNum + maxNum) / 2);
        return result;
    }

    lower() {
        maxNum = result;
    }

    greater() {
        minNum = result;
    }
}

module.exports = GuessingGame;
