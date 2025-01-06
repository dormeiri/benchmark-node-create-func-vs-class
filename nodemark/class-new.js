import benchmark from 'nodemark'

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

console.log(benchmark(() => new A(5).f1()))

