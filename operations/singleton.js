class A {
    constructor() {
    }
    f1(a) {
        return a
    }
    f2(a) {
        return a
    }
    f3(a) {
        return a
    }
    f4(a) {
        return a
    }
    f5(a) {
        return a
    }
}


export default function (n) {
    const a = new A()
    for (let i = 0; i < n; i++) {
        a.f1(i)
    }
}

