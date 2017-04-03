"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HelloEarthService = (function () {
    function HelloEarthService() {
    }
    HelloEarthService.prototype.sayHi = function () {
        return "Hello Earth!";
    };
    return HelloEarthService;
}());
exports.HelloEarthService = HelloEarthService;
var MockHelloEarthService = (function (_super) {
    __extends(MockHelloEarthService, _super);
    function MockHelloEarthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockHelloEarthService;
}(HelloEarthService));
exports.MockHelloEarthService = MockHelloEarthService;
var HelloWorldService = (function () {
    function HelloWorldService() {
    }
    HelloWorldService.prototype.sayHi = function () {
        return "Hello World!";
    };
    return HelloWorldService;
}());
exports.HelloWorldService = HelloWorldService;
var MockHelloWorldService = (function (_super) {
    __extends(MockHelloWorldService, _super);
    function MockHelloWorldService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockHelloWorldService;
}(HelloWorldService));
exports.MockHelloWorldService = MockHelloWorldService;
//# sourceMappingURL=hello_world.js.map