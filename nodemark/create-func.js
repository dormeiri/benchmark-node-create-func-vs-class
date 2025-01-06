import benchmark from 'nodemark'

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

console.log(benchmark(() => create(5).f1()))

