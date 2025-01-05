export class BenchmarkResultFormatter {
    constructor(iterations, timeTaken) {
        this.iterations = iterations
        this.timeTaken = timeTaken
        this.iterationsPerSecond = Math.round(this.iterations / (timeTaken / 1000))
    }

    text() {
        return `${this.iterations.toLocaleString()} operations in ${this.timeTaken.toLocaleString(undefined, { maximumFractionDigits: 3 })}ms (${this.iterationsPerSecond.toLocaleString()} iterations per second)`
    }

    csv() { 
        return [this.iterations, this.timeTaken, this.iterationsPerSecond].join(',')
    }

    json() {
        return JSON.stringify({ iterations: this.iterations, timeTaken: this.timeTaken, iterationsPerSecond: this.iterationsPerSecond })
    }
}

