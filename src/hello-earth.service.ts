import { IHelloWorldService } from './hello-world-interface.service';

export class HelloEarthService implements IHelloWorldService {
    public sayHi(): string {
        return "Hello Earth!";
    }
}

export class MockHelloEarthService extends HelloEarthService implements IHelloWorldService {
}
