export class Benchmark {
    constructor(iterations) {
        this.iterations = iterations
        this.startTime = 0
        this.result = null
    }

    start() {
        this.startTime = performance.now()
    }

    end() {
        const endTime = performance.now() - this.startTime
        this.result = {
            iterations: this.iterations,
            timeTaken: roundToPrecision(endTime, 3),
            iterationsPerSecond: Math.round(this.iterations / (endTime / 1000))
        }
    }
}

export const formatBenchmarkResultFuncs = {
    text(result) {
        return `Iterations: ${result.iterations}
Time taken: ${result.timeTaken}ms
Iterations per second: ${result.iterationsPerSecond}`
    },
    csv(result) { 
        return `${result.iterations},${result.timeTaken},${result.iterationsPerSecond}`
    },
    json(result) {
        return JSON.stringify(result)
    }
}

function roundToPrecision(number, precision) {
    return Math.round((number + Number.EPSILON) * Math.pow(10, precision)) / Math.pow(10, precision)
}

export function parseArg(argKeys) {
    if (!Array.isArray(argKeys)) {
        argKeys = [argKeys]
    }
    for (const arg of process.argv) {
        for (const argKey of argKeys) {
            if (arg.startsWith(argKey + '=')) {
                return arg.slice(argKey.length + 1)
            }
        }
    }
}

export function startBenchmark() {
    const benchmark = new Benchmark(parseArg('--iterations') ?? 1000)
    benchmark.start()
    return benchmark
}

export function endBenchmark(benchmark) {
    benchmark.end()
    const formatBenchmarkResult = formatBenchmarkResultFuncs[parseArg('--format') ?? 'text']
    console.log(formatBenchmarkResult(benchmark.result))
}
