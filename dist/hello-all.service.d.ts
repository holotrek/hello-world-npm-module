import { IHelloWorldService } from './hello-world-interface.service';
import { HelloWorldService } from './hello-world.service';
import { HelloEarthService } from './hello-earth.service';
export declare class HelloAllService implements IHelloWorldService {
    private helloWorld;
    private helloEarth;
    constructor(helloWorld: HelloWorldService, helloEarth: HelloEarthService);
    sayHi(): string;
}
export declare class MockHelloAllService extends HelloAllService implements IHelloWorldService {
}
