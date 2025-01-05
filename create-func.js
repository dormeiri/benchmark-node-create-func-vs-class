import { endBenchmark, startBenchmark } from './benchmark.js'

function create(a) {
    return {
        f1: function() {
            return a
        },
        f2: function() {
            return a
        },
        f3: function() {
            return a
        },
        f4: function() {
            return a
        },
        f5: function() {
            return a
        },
    }
} 

const benchmark = startBenchmark()
for (let i = 0; i < benchmark.iterations; i++) {
    create(i).f1()
}
endBenchmark(benchmark)
