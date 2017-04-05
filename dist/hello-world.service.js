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
