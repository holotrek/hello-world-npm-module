"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelloWorldService {
    sayHi() {
        return "Hello World!";
    }
}
exports.HelloWorldService = HelloWorldService;
class MockHelloWorldService extends HelloWorldService {
}
exports.MockHelloWorldService = MockHelloWorldService;
class HelloEarthService {
    sayHi() {
        return "Hello Earth!";
    }
}
exports.HelloEarthService = HelloEarthService;
class MockHelloEarthService extends HelloEarthService {
}
exports.MockHelloEarthService = MockHelloEarthService;
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
class HelloEarthService {
    sayHi() {
        return "Hello Earth!";
    }
}
exports.HelloEarthService = HelloEarthService;
class MockHelloEarthService extends HelloEarthService {
}
exports.MockHelloEarthService = MockHelloEarthService;
class HelloWorldService {
    sayHi() {
        return "Hello World!";
    }
}
exports.HelloWorldService = HelloWorldService;
class MockHelloWorldService extends HelloWorldService {
}
exports.MockHelloWorldService = MockHelloWorldService;
