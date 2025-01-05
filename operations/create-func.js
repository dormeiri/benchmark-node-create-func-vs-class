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

export default function (n) {
    for (let i = 0; i < n; i++) {
        create(i).f1()
    }
}

