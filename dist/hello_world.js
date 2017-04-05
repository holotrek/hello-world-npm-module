"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
