import { IHelloWorldService } from './hello-world-interface.service';
export declare class HelloWorldService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloWorldService extends HelloWorldService implements IHelloWorldService {
}
