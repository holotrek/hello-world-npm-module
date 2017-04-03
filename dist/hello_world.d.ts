export interface IHelloWorldService {
    sayHi(): string;
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
