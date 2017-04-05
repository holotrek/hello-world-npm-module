"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloAllService {
    constructor(helloWorld, helloEarth) {
        this.helloWorld = helloWorld;
        this.helloEarth = helloEarth;
    }
    sayHi() {
        return this.helloWorld.sayHi() + '\n' + this.helloEarth.sayHi();
    }
}
exports.HelloAllService = HelloAllService;
class MockHelloAllService extends HelloAllService {
}
exports.MockHelloAllService = MockHelloAllService;
