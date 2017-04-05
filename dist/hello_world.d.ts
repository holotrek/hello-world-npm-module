export interface IHelloWorldService {
    sayHi(): string;
}
export declare class HelloWorldService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloWorldService extends HelloWorldService implements IHelloWorldService {
}
export declare class HelloEarthService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloEarthService extends HelloEarthService implements IHelloWorldService {
}
export declare class HelloAllService implements IHelloWorldService {
    private helloWorld;
    private helloEarth;
    constructor(helloWorld: HelloWorldService, helloEarth: HelloEarthService);
    sayHi(): string;
}
export declare class MockHelloAllService extends HelloAllService implements IHelloWorldService {
}
export declare class HelloEarthService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloEarthService extends HelloEarthService implements IHelloWorldService {
}
export interface IHelloWorldService {
    sayHi(): string;
}
export declare class HelloWorldService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloWorldService extends HelloWorldService implements IHelloWorldService {
}
