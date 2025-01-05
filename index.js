import { benchmarkCreateFunc } from './benchmark-create-func.js'
import { benchmarkClassNew } from './benchmark-class-new.js'

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


const iterations = parseInt(parseArg('--iterations'))
const formatArg = parseArg('--format')
const benchmarkArg = parseArg('--benchmark')

const benchmarkFuncs = {
    'class-new': benchmarkClassNew,
    'create-func': benchmarkCreateFunc,
}

const benchmark = benchmarkFuncs[benchmarkArg]

const result = benchmark.run(iterations)
console.log(result[formatArg]())

