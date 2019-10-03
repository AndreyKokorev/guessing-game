class GuessingGame {
    
    constructor() {
        this.minIndex;
        this.maxIndex;
    }

    setRange(min, max) {
        this.minIndex = min;
        this.maxIndex = max;
    }

    guess() {
        
        return Math.ceil((this.maxIndex + this.minIndex) / 2);
    }

    lower() {
        this.maxIndex = Math.ceil((this.maxIndex + this.minIndex) / 2);
    }

    greater() {
        this.minIndex = Math.ceil((this.maxIndex + this.minIndex) / 2);
    }
}

module.exports = GuessingGame;