export class Benchmark {
    #fn

    constructor(fn) {
        this.#fn = fn
    }

    run(iterations) {
        let timeTaken = performance.now()
        this.#fn(iterations)
        timeTaken = performance.now() - timeTaken
        return new BenchmarkResult(iterations, timeTaken)
    }
}

export class BenchmarkResult {
    constructor(iterations, timeTaken) {
        this.iterations = iterations
        this.timeTaken = timeTaken
        this.iterationsPerSecond = Math.round(this.iterations / (timeTaken / 1000))
    }

    text() {
        return `Iterations: ${this.iterations}
Time taken: ${roundToPrecision(this.timeTaken, 3)}ms
Iterations per second: ${this.iterationsPerSecond}`
    }

    csv() { 
        return [this.iterations, this.timeTaken, this.iterationsPerSecond].join(',')
    }

    json() {
        return JSON.stringify({ iterations: this.iterations, timeTaken: this.timeTaken, iterationsPerSecond: this.iterationsPerSecond })
    }
}

function roundToPrecision(number, precision) {
    return Math.round((number + Number.EPSILON) * Math.pow(10, precision)) / Math.pow(10, precision)
}

