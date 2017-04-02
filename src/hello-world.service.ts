import { IHelloWorldService } from './hello-world-interface.service';

export class HelloWorldService implements IHelloWorldService {
    public sayHi(): string {
        return "Hello World!";
    }
}

export class MockHelloWorldService extends HelloWorldService implements IHelloWorldService {
}
