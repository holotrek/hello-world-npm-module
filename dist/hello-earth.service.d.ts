import { IHelloWorldService } from './hello-world-interface.service';
export declare class HelloEarthService implements IHelloWorldService {
    sayHi(): string;
}
export declare class MockHelloEarthService extends HelloEarthService implements IHelloWorldService {
}
