import { BenchmarkResultFormatter } from './BenchmarkResultFormatter.js'

function invariant(condition, message) {
    if (!condition) {
        throw new Error(message)
    }
}

function parseArg(argKeys) {
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


const samples = parseInt(parseArg('--samples'), 10)
const iterations = parseInt(parseArg('--iterations'), 10)

const format = parseArg('--format')
invariant(['text', 'csv', 'json'].includes(format), '--format must be one of text, csv, json')

const operation = parseArg('--operation')
invariant(/^[a-zA-Z0-9-]+$/.test(operation), '--operation must be provided and must be a valid operation name')

const { default: operationFunc } = await import(`./operations/${operation}.js`)

let timeTaken = performance.now()
operationFunc(iterations)
timeTaken = performance.now() - timeTaken

const result = new BenchmarkResultFormatter(iterations, timeTaken)
console.log(result[format]())

