class A {
    constructor(a) {
        this.a = a;
    }
    f1() {
        return this.a
    }
    f2() {
        return this.a
    }
    f3() {
        return this.a
    }
    f4() {
        return this.a
    }
    f5() {
        return this.a
    }
}


export default function (n) {
    for (let i = 0; i < n; i++) {
        new A(i).f1();
    }
}

